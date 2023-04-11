import { ApolloProvider } from '@apollo/client';
import { client } from '../../apollo';
import { LoginContainer } from '../../login';

export const RootComponent = () => {
  return (
    <ApolloProvider client={client}>
      <LoginContainer />
    </ApolloProvider>
  );
};
