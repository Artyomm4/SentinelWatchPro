import {useEffect,useState} from "react";
import {ArrowUpRight,CheckCircle2,Filter,ShieldAlert,XCircle} from "lucide-react";
import Layout from "../components/Layout";
import {Severity} from "../components/UI";
import {fallbackAlerts} from "../data/demo";
export default function Alerts(){const[a,setA]=useState(fallbackAlerts),[f,setF]=useState("All");useEffect(()=>{fetch("/api/monitoring/alerts").then(r=>r.ok?r.json():Promise.reject()).then(setA).catch(()=>{})},[]);
const rows=f==="All"?a:a.filter(x=>x.severity===f);return <Layout title="Alerts" subtitle="Security events sorted by severity so you can focus on what matters."><div className="alert-overview"><div><ShieldAlert size={20}/><div><strong>2 open alerts</strong><span>1 high priority · 1 medium priority</span></div></div><div className="alert-good"><CheckCircle2 size={18}/><span>No critical alerts</span></div></div>
<div className="filter-bar"><div className="filter-tabs">{["All","High","Medium","Low"].map(x=><button className={f===x?"selected":""} onClick={()=>setF(x)} key={x}>{x}</button>)}</div><button className="outline-button"><Filter size={15}/> More filters</button></div>
<div className="panel alert-panel">{rows.map(x=><article className="alert-row" key={x.id}><div className="alert-indicator"/><div className="alert-main"><div className="alert-title"><Severity value={x.severity}/><strong>{x.title}</strong></div><p>{x.description}</p><div className="alert-meta"><span>{x.device}</span><span>•</span><span>{x.time}</span></div></div><button className="outline-button">Review <ArrowUpRight size={14}/></button></article>)}{!rows.length&&<div className="empty-state"><XCircle size={24}/><strong>No alerts found</strong><p>Try another severity filter.</p></div>}</div>
<div className="info-note">Alerts in this demo represent simplified monitoring events. A production deployment would connect these events to real endpoint and network telemetry.</div></Layout>}
