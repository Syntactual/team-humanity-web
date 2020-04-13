import gql from 'graphql-tag';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Upload: any;
}



export interface Address {
   __typename?: 'Address';
  streetAddress: Scalars['String'];
  aptSuit?: Maybe<Scalars['String']>;
  city: Scalars['String'];
  zipCode: Scalars['Int'];
  stateAbbr: Scalars['String'];
}

export interface AddressInput {
  streetAddress: Scalars['String'];
  aptSuit?: Maybe<Scalars['String']>;
  city: Scalars['String'];
  zipCode: Scalars['Int'];
  stateAbbr?: Maybe<Scalars['String']>;
}

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}

export interface Mutation {
   __typename?: 'Mutation';
  createProfile: User;
}


export interface MutationCreateProfileArgs {
  user: UserInput;
}

export interface ProfilePicture {
   __typename?: 'ProfilePicture';
  fileName: Scalars['String'];
}

export interface ProfilePictureInput {
  fileName: Scalars['String'];
}

export interface Query {
   __typename?: 'Query';
  user?: Maybe<User>;
}


export interface User {
   __typename?: 'User';
  id?: Maybe<Scalars['ID']>;
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  age?: Maybe<Scalars['Int']>;
  phone?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  address: Address;
  picture: ProfilePicture;
}

export interface UserInput {
  id: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  phone?: Maybe<Scalars['String']>;
  age?: Maybe<Scalars['Int']>;
  email: Scalars['String'];
  profilePicture?: Maybe<ProfilePictureInput>;
  address: AddressInput;
}

export interface CreateProfileMutationVariables {
  user: UserInput;
}


export type CreateProfileMutation = (
  { __typename?: 'Mutation' }
  & { createProfile: (
    { __typename?: 'User' }
    & Pick<User, 'id' | 'firstName' | 'lastName' | 'age'>
    & { picture: (
      { __typename?: 'ProfilePicture' }
      & Pick<ProfilePicture, 'fileName'>
    ), address: (
      { __typename?: 'Address' }
      & Pick<Address, 'streetAddress' | 'aptSuit' | 'city' | 'zipCode' | 'stateAbbr'>
    ) }
  ) }
);

export interface UserQueryVariables {}


export type UserQuery = (
  { __typename?: 'Query' }
  & { user?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'firstName' | 'lastName' | 'age' | 'email'>
    & { address: (
      { __typename?: 'Address' }
      & Pick<Address, 'streetAddress'>
    ) }
  )> }
);

export interface CreateProfile2MutationVariables {
  user: UserInput;
}


export type CreateProfile2Mutation = (
  { __typename?: 'Mutation' }
  & { createProfile: (
    { __typename?: 'User' }
    & Pick<User, 'id' | 'firstName' | 'lastName' | 'age'>
    & { picture: (
      { __typename?: 'ProfilePicture' }
      & Pick<ProfilePicture, 'fileName'>
    ), address: (
      { __typename?: 'Address' }
      & Pick<Address, 'streetAddress' | 'aptSuit' | 'city' | 'zipCode' | 'stateAbbr'>
    ) }
  ) }
);

export const CreateProfileDocument = gql`
    mutation createProfile($user: UserInput!) {
  createProfile(user: $user) {
    id
    firstName
    lastName
    age
    picture {
      fileName
    }
    address {
      streetAddress
      aptSuit
      city
      zipCode
      stateAbbr
    }
  }
}
    `;

@Injectable({
    providedIn: 'root'
  })
  export class CreateProfileGQL extends Apollo.Mutation<CreateProfileMutation, CreateProfileMutationVariables> {
    document = CreateProfileDocument;

  }
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
export const CreateProfile2Document = gql`
    mutation createProfile2($user: UserInput!) {
  createProfile(user: $user) {
    id
    firstName
    lastName
    age
    picture {
      fileName
    }
    address {
      streetAddress
      aptSuit
      city
      zipCode
      stateAbbr
    }
  }
}
    `;

@Injectable({
    providedIn: 'root'
  })
  export class CreateProfile2GQL extends Apollo.Mutation<CreateProfile2Mutation, CreateProfile2MutationVariables> {
    document = CreateProfile2Document;

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
  __schema: {
    types: []
  }
};
export default result;

