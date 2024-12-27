import React from 'react'

const Sidebar = ({onAddNode, onAddEdge}) => (
  <div className="sidebar">
    <button onClick={onAddNode}>Add Node</button>
    <button onClick={onAddEdge}>Add Edge</button>
  </div>
)

export default Sidebar
