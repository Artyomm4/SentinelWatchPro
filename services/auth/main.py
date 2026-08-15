from fastapi import FastAPI
from pydantic import BaseModel
app=FastAPI(title="SentinelWatch Auth Service")
class Login(BaseModel):
    email:str
    password:str
@app.get("/health")
def health(): return {"service":"auth","status":"ok"}
@app.post("/login")
def login(data:Login):
    valid=data.email=="admin@northstar.local" and data.password=="demo-password"
    return {"authenticated":valid,"user":{"name":"Security Admin","role":"admin"} if valid else None}
