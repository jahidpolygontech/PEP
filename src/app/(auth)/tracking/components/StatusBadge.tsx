interface Props {
    status: 'On the Way' | 'Delivered' | 'Pending'
  }
  
  const StatusBadge = ({ status }: Props) => {
    const color =
      status === 'On the Way' ? 'bg-blue-100 text-blue-700' :
      status === 'Delivered' ? 'bg-green-100 text-green-700' :
      'bg-yellow-100 text-yellow-700'
  
    return (
      <span className={`px-3 py-1 text-sm font-medium rounded-full ${color}`}>
        {status}
      </span>
    )
  }
  export default StatusBadge;
  