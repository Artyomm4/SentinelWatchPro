from fastapi import FastAPI
from datetime import datetime,timezone
app=FastAPI(title="SentinelWatch Monitoring Service")
DEVICES=[
{"id":1,"name":"OFFICE-01","type":"Windows PC","status":"Protected","ip":"192.168.10.21","last_check":"8 min ago"},
{"id":2,"name":"OFFICE-02","type":"Windows PC","status":"Protected","ip":"192.168.10.22","last_check":"12 min ago"},
{"id":3,"name":"NAS-01","type":"Network storage","status":"Protected","ip":"192.168.10.50","last_check":"14 min ago"},
{"id":4,"name":"LAPTOP-07","type":"Laptop","status":"Protected","ip":"192.168.10.77","last_check":"18 min ago"}]
ALERTS=[
{"id":1,"severity":"High","title":"Repeated login failures","description":"Multiple failed login attempts were recorded for an administrator account.","device":"OFFICE-02","time":"41 min ago"},
{"id":2,"severity":"Medium","title":"Unusual outbound connection","description":"A device contacted an address outside the normal activity pattern.","device":"LAPTOP-07","time":"1 hr ago"},
{"id":3,"severity":"Low","title":"Update available","description":"A recommended operating-system update has not been installed yet.","device":"OFFICE-01","time":"3 hrs ago"}]
@app.get("/health")
def health(): return {"service":"monitoring","status":"ok"}
@app.get("/summary")
def summary(): return {"devices":len(DEVICES),"open_alerts":2,"critical_alerts":0,"risk_score":32,"generated_at":datetime.now(timezone.utc).isoformat()}
@app.get("/devices")
def devices(): return DEVICES
@app.get("/alerts")
def alerts(): return ALERTS
