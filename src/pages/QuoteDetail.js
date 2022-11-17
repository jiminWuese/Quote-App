
import { Fragment } from 'react';
import { useParams, Route } from 'react-router-dom'
import HighlightedQuote from '../components/quotes/HighlightedQuote';

import Comments from '../components/comments/Comments';

const DUMMY_QUOTES = [{
  id: 'q1', author: 'Jimin Wuese', text: 'To secret of winning  is starting and never stoping'
},
{
  id: 'q2', author: 'Jimin Wuese', text: 'Keep upgrading yourself, keep changing, for the derivative of a constant is equal to zero'
}
]



const QuoteDetail = () => {
  
  const params = useParams();
  const quote = DUMMY_QUOTES.find(quote => quote.id === params.quoteId);

  if(!quote){
    return (<p>No quote found</p>)
  }


  return (
  <Fragment>
    <HighlightedQuote text={quote.text} author={quote.author} />
    <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments />
    </Route>
  </Fragment>)
};

export default QuoteDetail;