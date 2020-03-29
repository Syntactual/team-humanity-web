import gql from 'graphql-tag';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};



export type Address = {
   __typename?: 'Address';
  streetAddress: Scalars['String'];
  aptSuit?: Maybe<Scalars['String']>;
  state: Scalars['String'];
  zipCode: Scalars['Int'];
  stateAbbr?: Maybe<Scalars['String']>;
};

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}

export type Query = {
   __typename?: 'Query';
  user?: Maybe<User>;
};

export type User = {
   __typename?: 'User';
  id: Scalars['ID'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  age?: Maybe<Scalars['Int']>;
  email: Scalars['String'];
  about?: Maybe<Scalars['String']>;
  address?: Maybe<Address>;
};

export type UserQueryVariables = {};


export type UserQuery = (
  { __typename?: 'Query' }
  & { user?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'firstName' | 'lastName' | 'age' | 'email'>
    & { address?: Maybe<(
      { __typename?: 'Address' }
      & Pick<Address, 'streetAddress'>
    )> }
  )> }
);

export const UserDocument = gql`
    query user {
  user {
    id
    firstName
    lastName
    age
    email
    address {
      streetAddress
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UserGQL extends Apollo.Query<UserQuery, UserQueryVariables> {
    document = UserDocument;
    
  }

      export interface IntrospectionResultData {
        __schema: {
          types: {
            kind: string;
            name: string;
            possibleTypes: {
              name: string;
            }[];
          }[];
        };
      }
      const result: IntrospectionResultData = {
  "__schema": {
    "types": []
  }
};
      export default result;
    