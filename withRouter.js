import { useParams } from 'react-router-dom';

const withRouter = Component => props => {
  const params = useParams();
  // other hooks
  return (
    <Component
      {...props}
      {...{ params }}
    />
  );
};

export default withRouter;