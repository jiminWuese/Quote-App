
import { Fragment } from 'react';
import { useParams, Route } from 'react-router-dom'

const QuoteDetail = () => {
  const params = useParams();
  return (
  <Fragment>
    <h1>Quotes details goes here...</h1>
    <p>{params.quoteId}</p>
    <Route path={`/quotes/${params.quoteId}`}>
        <h1>Hello Wolrld</h1>
    </Route>
  </Fragment>)
};

export default QuoteDetail;