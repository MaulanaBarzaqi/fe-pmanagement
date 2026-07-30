import ModalTaskDetailContainer from './ModalTaskDetailContainer';
import ModalTaskDetailProveder from './ModalTaskDetailContext';

const ModalTaskDetail = () => {
  return (
    <ModalTaskDetailProveder>
      <ModalTaskDetailContainer/>
    </ModalTaskDetailProveder>
  )
}

export default ModalTaskDetail;
