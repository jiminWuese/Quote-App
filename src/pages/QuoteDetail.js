
import { Fragment } from 'react';
import { useParams, Route } from 'react-router-dom'

import Comments from '../components/comments/Comments';
const QuoteDetail = () => {
  const params = useParams();
  return (
  <Fragment>
    <h1>Quotes details goes here...</h1>
    <p>{params.quoteId}</p>
    <Route path={`/quotes/${params.quoteId}`}>
        <Comments />
    </Route>
  </Fragment>)
};

export default QuoteDetail;