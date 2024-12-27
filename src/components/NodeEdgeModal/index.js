import React, {useState} from 'react'

const NodeEdgeModal = ({editType, onSave, onClose}) => {
  const [formData, setFormData] = useState({
    id: '',
    source: '',
    target: '',
    data: {label: ''},
  })

  const handleChange = e => {
    const {name, value} = e.target
    setFormData(prev => ({
      ...prev,
      [name]: name === 'data' ? {label: value} : value,
    }))
  }

  const handleSubmit = () => {
    onSave(formData)
  }

  return (
    <div className="modal">
      <h2>{editType === 'node' ? 'Add Node' : 'Add Edge'}</h2>
      <form>
        <label>
          ID:
          <input name="id" value={formData.id} onChange={handleChange} />
        </label>
        {editType === 'edge' && (
          <>
            <label>
              Source:
              <input
                name="source"
                value={formData.source}
                onChange={handleChange}
              />
            </label>
            <label>
              Target:
              <input
                name="target"
                value={formData.target}
                onChange={handleChange}
              />
            </label>
          </>
        )}
        <label>
          Label:
          <input
            name="data"
            value={formData.data.label}
            onChange={handleChange}
          />
        </label>
      </form>
      <button onClick={handleSubmit}>Save</button>
      <button onClick={onClose}>Close</button>
    </div>
  )
}

export default NodeEdgeModal
