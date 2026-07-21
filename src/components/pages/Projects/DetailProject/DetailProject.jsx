import DetailProjectContainer from './components/DetailProjectContainer';

import DetailProjectProveder from './DetailProjectContext';

const DetailProject = () => {
  return (
    <DetailProjectProveder>
      <DetailProjectContainer />
    </DetailProjectProveder>
  );
};

export default DetailProject;
