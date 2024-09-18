import { useContext, useEffect, useState } from 'react';
import KanbanBoard from "./KanbanBoard";
import useApiData from './utils/hooks/useApiData';
import StatusContext from './utils/context/StatusContext';
import { statuses } from './utils/constants';

const Body = () => {

   const { status } = useContext(StatusContext);
   const boardData = useApiData();
   const [kanbanBoard, setKanbanBoard] = useState([]);
   const ticketByStatus = (data, ordering) => {
      const sortedTickets = statuses.reduce((acc, status) => {
         acc[status] = data
            .filter((ticket) => ticket.status.toLowerCase() === status.toLowerCase())
            .sort((a, b) => {
               if (ordering === 'title') return a.title.localeCompare(b.title);
               else if (ordering === 'priority') return a.priority - b.priority;
            });
         return acc;
      }, {});
      return sortedTickets;
   }

   const ticketByUser = (data, ordering) => {
      const sortByUser = {};
      data.users.map((user) => {
         sortByUser[user.name] = data.tickets
            .filter((ticket) => ticket.userId === user.id)
            .sort((a, b) => {
               if (ordering === 'title') return a.title.localeCompare(b.title);
               else if (ordering === 'priority') return a.priority - b.priority;
            });
      });
      return sortByUser;
   }

   const ticketByPriority = (data, ordering) => {
      const sortByPriority = {
         "No priority": [],
         "Urgent": [],
         "High": [],
         "Medium": [],
         "Low": [],
      }
      data.tickets.map(ticket => {
         switch (ticket?.priority) {
            case 0:
               sortByPriority["No priority"].push(ticket);
               break;
            case 1:
               sortByPriority["Low"].push(ticket);
               break;
            case 2:
               sortByPriority["Medium"].push(ticket);
               break;
            case 3:
               sortByPriority["High"].push(ticket);
               break;
            case 4:
               sortByPriority["Urgent"].push(ticket);
               break;
         }
      });

      Object.keys(sortByPriority).forEach(priority => {
         sortByPriority[priority].sort((a, b) => {
            if (ordering === 'title') return a.title.localeCompare(b.title);
            else if (ordering === 'priority') return a.priority - b.priority;
         });
      });

      return sortByPriority;
   }

   useEffect(() => {
      if (status.grouping === "status") {
         if (boardData && boardData.tickets)
            setKanbanBoard(ticketByStatus(boardData.tickets, status.ordering));
      } else if (status.grouping === "user") {
         if (boardData && boardData.users)
            setKanbanBoard(ticketByUser(boardData, status.ordering));
      } else if (status.grouping === "priority") {
         if (boardData && boardData.tickets)
            setKanbanBoard(ticketByPriority(boardData, status.ordering));
      }
   }, [status, boardData]);

   return (
      <div className='kanbans-wrapper'>
         {
            kanbanBoard && Object.keys(kanbanBoard).map((ob, i) =>
               <KanbanBoard key={`${ob}-${i}`} title={ob} tickets={kanbanBoard[ob]} users={boardData.users} />
            )
         }
      </div>
   )
}

export default Body;