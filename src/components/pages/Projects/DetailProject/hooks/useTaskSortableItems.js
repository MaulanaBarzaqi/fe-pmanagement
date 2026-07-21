import { useSortable } from '@dnd-kit/sortable';
import useDetailProjectContext from './useDetailProjectContext';
import { DRAG_CARD } from '@/utils/constants';

const useTaskSortableItems = ({ id, item, listId }) => {
  const detailProjectContext = useDetailProjectContext();

  const {
    setNodeRef,
    attributes,
    listeners,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id,
    data: {
      ...item,
      type: DRAG_CARD,
    },
  });

  return {
    detailProjectContext,
    isDragging,
    attributes,
    transform,
    setNodeRef,
    listeners,
    transition,
  };
};

export default useTaskSortableItems;
