import {useEffect,useState} from "react";
import {Activity,ArrowUpRight,CheckCircle2,Clock3,ShieldCheck,TriangleAlert} from "lucide-react";
import Layout from "../components/Layout";
import {ActivityItem,ProgressRing,SectionHeading,StatCard} from "../components/UI";
import {fallbackSummary} from "../data/demo";
async function loadSummary(){try{const r=await fetch("/api/monitoring/summary");if(!r.ok)throw 0;return await r.json()}catch{return fallbackSummary}}
export default function Dashboard(){const[s,setS]=useState(fallbackSummary);useEffect(()=>{loadSummary().then(setS)},[]);
return <Layout title="Overview" subtitle="A clear picture of what is happening across your monitored environment.">
<section className="welcome-card"><div className="welcome-copy"><span className="eyebrow">SECURITY POSTURE</span><h2>Your environment is in good shape.</h2><p>SentinelWatch is monitoring your registered devices and looking for events that deserve attention.</p><div className="welcome-meta"><span><CheckCircle2 size={15}/> Monitoring active</span><span><Clock3 size={15}/> Last check 8 min ago</span></div></div><div className="score-wrap"><ProgressRing score={s.risk_score}/><span>Low overall risk</span></div></section>
<section className="stat-grid"><StatCard label="Protected devices" value={s.devices} note="All responding normally" icon={ShieldCheck} tone="green"/><StatCard label="Open alerts" value={s.open_alerts} note="2 need your attention" icon={TriangleAlert} tone="amber"/><StatCard label="Critical alerts" value={s.critical_alerts} note="Nothing critical right now" icon={ShieldCheck} tone="blue"/><StatCard label="Checks today" value="48" note="Last run 8 min ago" icon={Activity} tone="purple"/></section>
<section className="content-grid"><div className="panel"><SectionHeading title="Recent activity" action={<button className="text-button">View activity <ArrowUpRight size={14}/></button>}/>
<ActivityItem icon={CheckCircle2} title="Firewall policy check completed" detail="OFFICE-01 · Policy is up to date" time="8 min ago"/>
<ActivityItem icon={CheckCircle2} title="Operating-system update detected" detail="OFFICE-02 · Update installed successfully" time="24 min ago"/>
<ActivityItem icon={TriangleAlert} title="Unusual login attempt blocked" detail="OFFICE-02 · Administrator account" time="41 min ago" tone="amber"/>
<ActivityItem icon={CheckCircle2} title="Device health check completed" detail="NAS-01 · No issues found" time="1 hr ago"/></div>
<div className="panel"><SectionHeading title="Attention needed"/><div className="attention-card high"><div className="attention-top"><span>HIGH</span><time>41 min ago</time></div><strong>Repeated login failures</strong><p>Multiple failed attempts were recorded for an administrator account.</p><button className="outline-button">Review alert <ArrowUpRight size={14}/></button></div>
<div className="attention-card medium"><div className="attention-top"><span>MEDIUM</span><time>1 hr ago</time></div><strong>Unusual outbound connection</strong><p>LAPTOP-07 contacted an address outside its normal activity pattern.</p><button className="outline-button">Review alert <ArrowUpRight size={14}/></button></div></div></section>
<section className="panel checklist-panel"><SectionHeading title="Security checklist" action={<span className="completion">2 of 4 complete</span>}/><div className="checklist">
<div className="check-row done"><span><CheckCircle2 size={18}/></span><div><strong>Devices connected</strong><small>4 devices are responding</small></div></div>
<div className="check-row done"><span><CheckCircle2 size={18}/></span><div><strong>Firewall monitoring</strong><small>Policies checked within the last hour</small></div></div>
<div className="check-row"><span><div className="empty-check"/></span><div><strong>Critical alerts reviewed</strong><small>No critical alerts are currently open</small></div></div>
<div className="check-row"><span><div className="empty-check"/></span><div><strong>Weekly report generated</strong><small>Next report is due Monday</small></div></div>
</div></section></Layout>}
