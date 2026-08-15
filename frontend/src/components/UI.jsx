import {ArrowUpRight} from "lucide-react";
export function StatCard({label,value,note,icon:Icon,tone="default"}){return <div className="stat-card"><div className={"stat-icon "+tone}><Icon size={18}/></div><div className="stat-copy"><span>{label}</span><strong>{value}</strong><small>{note}</small></div></div>}
export function Severity({value}){return <span className={"severity "+value.toLowerCase()}><span/>{value}</span>}
export function Status({children}){return <span className="status-tag"><span/>{children}</span>}
export function SectionHeading({title,action}){return <div className="section-heading"><h2>{title}</h2>{action}</div>}
export function ActivityItem({icon:Icon,title,detail,time,tone="good"}){return <div className="activity-item"><div className={"activity-icon "+tone}><Icon size={16}/></div><div className="activity-copy"><strong>{title}</strong><span>{detail}</span></div><time>{time}</time></div>}
export function ProgressRing({score}){const c=2*Math.PI*48,o=c-(score/100)*c;return <div className="progress-ring"><svg viewBox="0 0 112 112"><circle className="ring-bg" cx="56" cy="56" r="48"/><circle className="ring-value" cx="56" cy="56" r="48" strokeDasharray={c} strokeDashoffset={o}/></svg><div><strong>{score}</strong><span>/ 100</span></div></div>}
export {ArrowUpRight};
