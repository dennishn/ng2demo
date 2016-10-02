import ApolloClient, {createNetworkInterface} from 'apollo-client';

const url = '/graphql';

const networkInterface = createNetworkInterface({
    uri: url,
    opts: {
        credentials: 'same-origin'
    },
    transportBatching: true
});

export const githubApolloClient = new ApolloClient({
    networkInterface
});