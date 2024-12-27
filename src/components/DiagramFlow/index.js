import React, {useState, useCallback} from 'react'
import ReactFlow, {
  addEdge,
  MiniMap,
  Controls,
  Background,
} from 'react-flow-renderer'
import Sidebar from '../Sidebar'
import NodeEdgeModal from '../NodeEdgeModal'

const DiagramFlow = () => {
  const [nodes, setNodes] = useState([])
  const [edges, setEdges] = useState([])
  const [modalOpen, setModalOpen] = useState(false)
  const [editType, setEditType] = useState(null) // 'node' or 'edge'

  const handleAddNode = () => {
    setModalOpen(true)
    setEditType('node')
  }

  const handleAddEdge = () => {
    setModalOpen(true)
    setEditType('edge')
  }

  const onConnect = useCallback(
    params => setEdges(eds => addEdge(params, eds)),
    [setEdges],
  )

  const handleSave = data => {
    if (editType === 'node') {
      setNodes(nds => [...nds, {...data, position: {x: 250, y: 150}}])
    } else if (editType === 'edge') {
      setEdges(eds => [...eds, data])
    }
    setModalOpen(false)
  }

  return (
    <div className="diagram-container">
      <Sidebar onAddNode={handleAddNode} onAddEdge={handleAddEdge} />
      <div className="react-flow-wrapper">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={setNodes}
          onEdgesChange={setEdges}
          onConnect={onConnect}
          fitView
        >
          <MiniMap />
          <Controls />
          <Background />
        </ReactFlow>
      </div>
      {modalOpen && (
        <NodeEdgeModal
          editType={editType}
          onSave={handleSave}
          onClose={() => setModalOpen(false)}
        />
      )}
    </div>
  )
}

export default DiagramFlow
