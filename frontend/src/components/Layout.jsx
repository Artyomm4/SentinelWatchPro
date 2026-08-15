import {NavLink,useNavigate} from "react-router-dom";
import {ShieldCheck,LayoutDashboard,Monitor,TriangleAlert,FileText,Settings,LogOut,ChevronRight} from "lucide-react";
const links=[
{to:"/",label:"Overview",icon:LayoutDashboard,end:true},
{to:"/devices",label:"Devices",icon:Monitor},
{to:"/alerts",label:"Alerts",icon:TriangleAlert},
{to:"/reports",label:"Reports",icon:FileText},
{to:"/settings",label:"Settings",icon:Settings}];
export default function Layout({children,title,subtitle}){
const navigate=useNavigate();
return <div className="app-shell"><aside className="sidebar">
<div className="brand"><div className="brand-mark"><ShieldCheck size={18}/></div><div><strong>SentinelWatch</strong><span>security console</span></div></div>
<div className="workspace"><div className="workspace-avatar">N</div><div><strong>Northstar Office</strong><span>Business workspace</span></div><ChevronRight size={15}/></div>
<p className="nav-label">MONITORING</p><nav>{links.map(({to,label,icon:Icon,end})=><NavLink key={to} to={to} end={end}><Icon size={17}/><span>{label}</span>{label==="Alerts"&&<em>2</em>}</NavLink>)}</nav>
<div className="sidebar-footer"><div className="plan-card"><div className="plan-icon"><ShieldCheck size={16}/></div><div><strong>Monitoring active</strong><span>Business plan</span></div></div>
<button className="logout-button" onClick={()=>navigate("/login")}><LogOut size={16}/> Sign out</button></div>
</aside><main className="main-content"><header className="page-header"><div><div className="breadcrumb">Security console <ChevronRight size={13}/> {title}</div><h1>{title}</h1><p>{subtitle}</p></div>
<div className="header-actions"><div className="service-status"><span/> All systems operational</div><div className="user-avatar">SA</div></div></header>{children}</main></div>}
