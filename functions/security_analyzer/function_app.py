import azure.functions as func,json
app=func.FunctionApp(http_auth_level=func.AuthLevel.FUNCTION)
@app.route(route="analyze",methods=["POST"])
def analyze(req:func.HttpRequest)->func.HttpResponse:
    try: event=req.get_json()
    except ValueError: return func.HttpResponse(json.dumps({"error":"Invalid JSON"}),status_code=400,mimetype="application/json")
    failed=max(0,int(event.get("failed_logins",0))); unusual=bool(event.get("unusual_connection",False))
    severity="high" if failed>=8 or unusual else "medium" if failed>=3 else "low"
    score=min(100,failed*7+(40 if unusual else 0))
    return func.HttpResponse(json.dumps({"risk_score":score,"severity":severity,"message":"Event analysed by SentinelWatch serverless analyzer."}),status_code=200,mimetype="application/json")
