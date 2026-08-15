import {useEffect,useState} from "react";
import {Laptop,Monitor,MoreHorizontal,Plus,Search,Server,ShieldCheck} from "lucide-react";
import Layout from "../components/Layout";
import {Status} from "../components/UI";
import {fallbackDevices} from "../data/demo";
const icons={"Windows PC":Monitor,"Laptop":Laptop,"Network storage":Server};
export default function Devices(){const[d,setD]=useState(fallbackDevices),[q,setQ]=useState("");useEffect(()=>{fetch("/api/monitoring/devices").then(r=>r.ok?r.json():Promise.reject()).then(setD).catch(()=>{})},[]);
const rows=d.filter(x=>`${x.name} ${x.type} ${x.ip}`.toLowerCase().includes(q.toLowerCase()));
return <Layout title="Devices" subtitle="Registered endpoints and their latest monitoring status."><div className="toolbar"><div className="search-box"><Search size={16}/><input value={q} onChange={e=>setQ(e.target.value)} placeholder="Search devices..."/></div><button className="primary-button"><Plus size={16}/> Add device</button></div>
<div className="device-summary"><div><ShieldCheck size={18}/><strong>4 / 4 devices protected</strong></div><span>All devices checked within the last 30 minutes</span></div>
<div className="panel table-panel"><div className="table-header"><span>Device</span><span>Type</span><span>Network</span><span>Status</span><span>Last check</span><span/></div>{rows.map(x=>{const I=icons[x.type]||Laptop;return <div className="table-row" key={x.id}><div className="device-name"><div className="device-icon"><I size={17}/></div><div><strong>{x.name}</strong><small>Managed endpoint</small></div></div><span>{x.type}</span><span className="mono">{x.ip}</span><Status>{x.status}</Status><span>{x.last_check}</span><button className="icon-button"><MoreHorizontal size={17}/></button></div>})}</div></Layout>}
