import * as React from 'react'
import Paper from '@material-ui/core/Paper'
import Modal from '@material-ui/core/Modal'
import LinearProgress from '@material-ui/core/LinearProgress'

import { IProgress } from '../../interfaces/IProgress'

interface ProgressModalProps {
  progress: IProgress | null
}

const ProgressModal: React.FunctionComponent<ProgressModalProps> = ({
  progress,
}) => (
  <Modal
    open={progress !== null}
    style={{
      width: 500,
      height: 300,
      top: '50%',
      left: 'calc(50% - 300px)',
    }}
  >
    <Paper>
      {progress && (
        <div style={{ padding: 20 }}>
          <LinearProgress
            variant="determinate"
            value={progress.done / progress.all * 100}
          />
          {progress.done} / {progress.all}
          <br />
          {progress.current.original} -> {progress.current.translated}
        </div>
      )}
    </Paper>
  </Modal>
)

export { ProgressModal }
