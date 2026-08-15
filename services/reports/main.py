import os
from fastapi import FastAPI
from pydantic import BaseModel
app=FastAPI(title="SentinelWatch Reports Service")
REPORTS=[
{"id":1,"name":"Weekly Security Summary","period":"Aug 3 – Aug 9, 2026","size":"420 KB","type":"PDF"},
{"id":2,"name":"Monthly Risk Overview","period":"July 2026","size":"1.2 MB","type":"PDF"},
{"id":3,"name":"Device Health Report","period":"July 2026","size":"680 KB","type":"PDF"}]
@app.get("/health")
def health(): return {"service":"reports","status":"ok"}
@app.get("/reports")
def reports(): return REPORTS
class ReportText(BaseModel):
    filename:str
    content:str
@app.post("/reports/upload")
def upload_report(report:ReportText):
    connection=os.getenv("AZURE_STORAGE_CONNECTION_STRING","")
    if not connection: return {"uploaded":False,"message":"Cloud storage is not configured; demo mode is active."}
    try:
        from azure.storage.blob import BlobServiceClient
        client=BlobServiceClient.from_connection_string(connection)
        container=os.getenv("AZURE_STORAGE_CONTAINER","sentinelwatch-reports")
        client.get_container_client(container).upload_blob(report.filename,report.content.encode(),overwrite=True)
        return {"uploaded":True,"container":container,"filename":report.filename}
    except Exception as exc: return {"uploaded":False,"message":"Storage upload failed","detail":str(exc)}
