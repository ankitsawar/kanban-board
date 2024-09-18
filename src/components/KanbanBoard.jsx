import { ReactComponent as AddIcon } from "../assets/add.svg";
import { ReactComponent as DotMenuIcon } from "../assets/dot-menu.svg";
import { ReactComponent as InProgressIcon } from '../assets/in-progress.svg';
import { ReactComponent as BacklogIcon } from '../assets/Backlog.svg';
import { ReactComponent as TodoIcon } from '../assets/To-do.svg';
import { ReactComponent as DoneIcon } from '../assets/Done.svg';
import { ReactComponent as CanceledIcon } from '../assets/Cancelled.svg';
import { ReactComponent as UrgentIcon } from '../assets/SVG - Urgent Priority colour.svg';
import { ReactComponent as HighIcon } from '../assets/Img - High Priority.svg';
import { ReactComponent as MediumIcon } from '../assets/Img - Medium Priority.svg';
import { ReactComponent as LowIcon } from '../assets/Img - Low Priority.svg';
import TicketCard from "./TicketCard";
import { useContext } from "react";
import StatusContext from "./utils/context/StatusContext";
import { getColor } from "./utils/constants";

const KanbanBoard = ({ title, tickets, users }) => {
   const { status } = useContext(StatusContext);
   const Icons = {
      "Backlog": <BacklogIcon />,
      "Todo": <TodoIcon />,
      "Done": <DoneIcon />,
      "Canceled": <CanceledIcon />,
      "In progress": <InProgressIcon />,
      "No priority": <DotMenuIcon />,
      "Urgent": <UrgentIcon />,
      "Hight": <HighIcon />,
      "Medium": <MediumIcon />,
      "Low": <LowIcon />
   }

   const getUser = () => {

      const initials = title.split(" ");
      return initials.length > 1 ? initials[0].charAt(0) + "" + initials[initials.length - 1].charAt(0) : initials[0].charAt(0)
   }

   const renderIcon = () => {
      if (status.grouping === "status" || status.grouping === "priority")
         return Icons[title];
      else if (status.grouping === "user")
         return <div className="user-status-wrap">
            <div className="initials" style={{ backgroundColor: getColor() }}>{getUser()}</div>
         </div>
   }
   return (
      <div className="kanbans-wrap no-scrollbar">
         <div className="kanban-header">
            <div className="icon-wrap">
               {
                  renderIcon()
               }
               {title} <span className="counter">{tickets?.length}</span>
            </div>
            <div>
               <a><AddIcon /></a>
               <a><DotMenuIcon /></a>
            </div>
         </div>
         <div className="kanban-card no-scrollbar">
            {
               tickets && tickets.map((ticket) =>
                  <TicketCard key={ticket.id} ticket={ticket} users={users} />
               )
            }
         </div>
      </div>
   )
}

export default KanbanBoard;