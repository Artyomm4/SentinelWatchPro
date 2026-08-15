# SentinelWatch

SentinelWatch is a cloud-ready security monitoring dashboard for small businesses. It provides a simple view of devices, security events and reports.

## Project scope

A fictional small business connects its workstations and network devices to a monitoring service. SentinelWatch presents a security posture score, highlights alerts and prepares readable reports.

## Technology

- React + Vite frontend
- FastAPI REST microservices
- API Gateway
- Docker / Docker Compose
- Kubernetes / AKS manifests
- Azure Blob Storage integration for reports
- Azure Functions serverless event analyzer

## Pages

Overview, Devices, Alerts, Reports, Settings and Login.

## Local run

From this folder:

    docker compose up --build

Open http://localhost:8080

Demo account:
    admin@northstar.local
    demo-password

The sample data is fictional. No real company or security data is used.

## Cloud

The `k8s/` folder contains deployment resources. Replace `YOUR_REGISTRY` with your container registry name before deployment.

The reports service supports Azure Blob Storage through:
    AZURE_STORAGE_CONNECTION_STRING
    AZURE_STORAGE_CONTAINER=sentinelwatch-reports

The serverless component is in `functions/security_analyzer`.

SentinelWatch is an educational Cloud IT prototype, not a production SIEM, EDR or SOC platform.
