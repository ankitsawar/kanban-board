export const statuses = ['Backlog', 'Todo', 'In progress', 'Done', 'Canceled'];
export const colors = ['#818b06', '#b46a2a', '#2c953c', '#5e81eb'];

export const getColor = () => {
   return colors[Math.floor(Math.random() * colors.length)]
}