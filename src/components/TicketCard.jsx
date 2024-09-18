import { ReactComponent as UrgentPriorityIcon } from "../assets/SVG-Urgent-Priority-grey.svg";
import UserStatus from "./UserStatus";
const TicketCard = ({ ticket, users }) => {
   return (
      <div className="ticket" key={ticket.id}>
         <div>
            <h2 className="ticket-id">{ticket.id}</h2>
            <div className="ticket-title">
               {ticket.title}
            </div>
            <div className="ticket-importance">
               <div className="ticket-priority">
                  <UrgentPriorityIcon />
               </div>
               <div className="ticket-request">
                  Feature Request
               </div>
            </div>
            <UserStatus userId={ticket.userId} users={users} />
         </div>
      </div>
   )
}

export default TicketCard