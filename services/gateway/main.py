import os,httpx
from fastapi import FastAPI,HTTPException
app=FastAPI(title="SentinelWatch API Gateway")
MONITORING_URL=os.getenv("MONITORING_URL","http://localhost:8002")
REPORTS_URL=os.getenv("REPORTS_URL","http://localhost:8003")
async def forward(url):
    try:
        async with httpx.AsyncClient(timeout=5) as c:
            r=await c.get(url);r.raise_for_status();return r.json()
    except Exception: raise HTTPException(status_code=503,detail="Requested service is temporarily unavailable")
@app.get("/health")
async def health(): return {"service":"gateway","status":"ok"}
@app.get("/monitoring/summary")
async def summary(): return await forward(f"{MONITORING_URL}/summary")
@app.get("/monitoring/devices")
async def devices(): return await forward(f"{MONITORING_URL}/devices")
@app.get("/monitoring/alerts")
async def alerts(): return await forward(f"{MONITORING_URL}/alerts")
@app.get("/reports")
async def reports(): return await forward(f"{REPORTS_URL}/reports")
