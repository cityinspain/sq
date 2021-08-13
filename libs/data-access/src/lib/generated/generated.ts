import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * A signed eight-byte integer. The upper big integer values are greater than the
   * max value for a JavaScript number. Therefore all big integers will be output as
   * strings and not numbers.
   */
  BigInt: any;
  /** A location in a connection that can be used for resuming pagination. */
  Cursor: any;
  /**
   * A point in time as described by the [ISO
   * 8601](https://en.wikipedia.org/wiki/ISO_8601) standard. May or may not include a timezone.
   */
  Datetime: any;
};




/** A filter to be used against BigInt fields. All fields are combined with a logical ‘and.’ */
export type BigIntFilter = {
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: Maybe<Scalars['Boolean']>;
  /** Equal to the specified value. */
  equalTo?: Maybe<Scalars['BigInt']>;
  /** Not equal to the specified value. */
  notEqualTo?: Maybe<Scalars['BigInt']>;
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: Maybe<Scalars['BigInt']>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: Maybe<Scalars['BigInt']>;
  /** Included in the specified list. */
  in?: Maybe<Array<Scalars['BigInt']>>;
  /** Not included in the specified list. */
  notIn?: Maybe<Array<Scalars['BigInt']>>;
  /** Less than the specified value. */
  lessThan?: Maybe<Scalars['BigInt']>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: Maybe<Scalars['BigInt']>;
  /** Greater than the specified value. */
  greaterThan?: Maybe<Scalars['BigInt']>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: Maybe<Scalars['BigInt']>;
};

/** A filter to be used against Boolean fields. All fields are combined with a logical ‘and.’ */
export type BooleanFilter = {
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: Maybe<Scalars['Boolean']>;
  /** Equal to the specified value. */
  equalTo?: Maybe<Scalars['Boolean']>;
  /** Not equal to the specified value. */
  notEqualTo?: Maybe<Scalars['Boolean']>;
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: Maybe<Scalars['Boolean']>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: Maybe<Scalars['Boolean']>;
  /** Included in the specified list. */
  in?: Maybe<Array<Scalars['Boolean']>>;
  /** Not included in the specified list. */
  notIn?: Maybe<Array<Scalars['Boolean']>>;
  /** Less than the specified value. */
  lessThan?: Maybe<Scalars['Boolean']>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: Maybe<Scalars['Boolean']>;
  /** Greater than the specified value. */
  greaterThan?: Maybe<Scalars['Boolean']>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: Maybe<Scalars['Boolean']>;
};

/** All input for the create `LahmanBatting` mutation. */
export type CreateLahmanBattingInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `LahmanBatting` to be created by this mutation. */
  lahmanBatting: LahmanBattingInput;
};

/** The output of our create `LahmanBatting` mutation. */
export type CreateLahmanBattingPayload = {
  __typename?: 'CreateLahmanBattingPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `LahmanBatting` that was created by this mutation. */
  lahmanBatting?: Maybe<LahmanBatting>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `LahmanPerson` that is related to this `LahmanBatting`. */
  lahmanPersonByPlayerId?: Maybe<LahmanPerson>;
  /** An edge for our `LahmanBatting`. May be used by Relay 1. */
  lahmanBattingEdge?: Maybe<LahmanBattingsEdge>;
};


/** The output of our create `LahmanBatting` mutation. */
export type CreateLahmanBattingPayloadLahmanBattingEdgeArgs = {
  orderBy?: Maybe<Array<LahmanBattingsOrderBy>>;
};

/** All input for the create `LahmanBattingpost` mutation. */
export type CreateLahmanBattingpostInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `LahmanBattingpost` to be created by this mutation. */
  lahmanBattingpost: LahmanBattingpostInput;
};

/** The output of our create `LahmanBattingpost` mutation. */
export type CreateLahmanBattingpostPayload = {
  __typename?: 'CreateLahmanBattingpostPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `LahmanBattingpost` that was created by this mutation. */
  lahmanBattingpost?: Maybe<LahmanBattingpost>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** An edge for our `LahmanBattingpost`. May be used by Relay 1. */
  lahmanBattingpostEdge?: Maybe<LahmanBattingpostsEdge>;
};


/** The output of our create `LahmanBattingpost` mutation. */
export type CreateLahmanBattingpostPayloadLahmanBattingpostEdgeArgs = {
  orderBy?: Maybe<Array<LahmanBattingpostsOrderBy>>;
};

/** All input for the create `LahmanFielding` mutation. */
export type CreateLahmanFieldingInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `LahmanFielding` to be created by this mutation. */
  lahmanFielding: LahmanFieldingInput;
};

/** The output of our create `LahmanFielding` mutation. */
export type CreateLahmanFieldingPayload = {
  __typename?: 'CreateLahmanFieldingPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `LahmanFielding` that was created by this mutation. */
  lahmanFielding?: Maybe<LahmanFielding>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** An edge for our `LahmanFielding`. May be used by Relay 1. */
  lahmanFieldingEdge?: Maybe<LahmanFieldingsEdge>;
};


/** The output of our create `LahmanFielding` mutation. */
export type CreateLahmanFieldingPayloadLahmanFieldingEdgeArgs = {
  orderBy?: Maybe<Array<LahmanFieldingsOrderBy>>;
};

/** All input for the create `LahmanFieldingpost` mutation. */
export type CreateLahmanFieldingpostInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `LahmanFieldingpost` to be created by this mutation. */
  lahmanFieldingpost: LahmanFieldingpostInput;
};

/** The output of our create `LahmanFieldingpost` mutation. */
export type CreateLahmanFieldingpostPayload = {
  __typename?: 'CreateLahmanFieldingpostPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `LahmanFieldingpost` that was created by this mutation. */
  lahmanFieldingpost?: Maybe<LahmanFieldingpost>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** An edge for our `LahmanFieldingpost`. May be used by Relay 1. */
  lahmanFieldingpostEdge?: Maybe<LahmanFieldingpostsEdge>;
};


/** The output of our create `LahmanFieldingpost` mutation. */
export type CreateLahmanFieldingpostPayloadLahmanFieldingpostEdgeArgs = {
  orderBy?: Maybe<Array<LahmanFieldingpostsOrderBy>>;
};

/** All input for the create `LahmanPark` mutation. */
export type CreateLahmanParkInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `LahmanPark` to be created by this mutation. */
  lahmanPark: LahmanParkInput;
};

/** The output of our create `LahmanPark` mutation. */
export type CreateLahmanParkPayload = {
  __typename?: 'CreateLahmanParkPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `LahmanPark` that was created by this mutation. */
  lahmanPark?: Maybe<LahmanPark>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** An edge for our `LahmanPark`. May be used by Relay 1. */
  lahmanParkEdge?: Maybe<LahmanParksEdge>;
};


/** The output of our create `LahmanPark` mutation. */
export type CreateLahmanParkPayloadLahmanParkEdgeArgs = {
  orderBy?: Maybe<Array<LahmanParksOrderBy>>;
};

/** All input for the create `LahmanPerson` mutation. */
export type CreateLahmanPersonInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `LahmanPerson` to be created by this mutation. */
  lahmanPerson: LahmanPersonInput;
};

/** The output of our create `LahmanPerson` mutation. */
export type CreateLahmanPersonPayload = {
  __typename?: 'CreateLahmanPersonPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `LahmanPerson` that was created by this mutation. */
  lahmanPerson?: Maybe<LahmanPerson>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** An edge for our `LahmanPerson`. May be used by Relay 1. */
  lahmanPersonEdge?: Maybe<LahmanPeopleEdge>;
};


/** The output of our create `LahmanPerson` mutation. */
export type CreateLahmanPersonPayloadLahmanPersonEdgeArgs = {
  orderBy?: Maybe<Array<LahmanPeopleOrderBy>>;
};

/** All input for the create `LahmanPitching` mutation. */
export type CreateLahmanPitchingInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `LahmanPitching` to be created by this mutation. */
  lahmanPitching: LahmanPitchingInput;
};

/** The output of our create `LahmanPitching` mutation. */
export type CreateLahmanPitchingPayload = {
  __typename?: 'CreateLahmanPitchingPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `LahmanPitching` that was created by this mutation. */
  lahmanPitching?: Maybe<LahmanPitching>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `LahmanPerson` that is related to this `LahmanPitching`. */
  lahmanPersonByPlayerId?: Maybe<LahmanPerson>;
  /** An edge for our `LahmanPitching`. May be used by Relay 1. */
  lahmanPitchingEdge?: Maybe<LahmanPitchingsEdge>;
};


/** The output of our create `LahmanPitching` mutation. */
export type CreateLahmanPitchingPayloadLahmanPitchingEdgeArgs = {
  orderBy?: Maybe<Array<LahmanPitchingsOrderBy>>;
};

/** All input for the create `LahmanPitchingpost` mutation. */
export type CreateLahmanPitchingpostInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `LahmanPitchingpost` to be created by this mutation. */
  lahmanPitchingpost: LahmanPitchingpostInput;
};

/** The output of our create `LahmanPitchingpost` mutation. */
export type CreateLahmanPitchingpostPayload = {
  __typename?: 'CreateLahmanPitchingpostPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `LahmanPitchingpost` that was created by this mutation. */
  lahmanPitchingpost?: Maybe<LahmanPitchingpost>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `LahmanPerson` that is related to this `LahmanPitchingpost`. */
  lahmanPersonByPlayerId?: Maybe<LahmanPerson>;
  /** An edge for our `LahmanPitchingpost`. May be used by Relay 1. */
  lahmanPitchingpostEdge?: Maybe<LahmanPitchingpostsEdge>;
};


/** The output of our create `LahmanPitchingpost` mutation. */
export type CreateLahmanPitchingpostPayloadLahmanPitchingpostEdgeArgs = {
  orderBy?: Maybe<Array<LahmanPitchingpostsOrderBy>>;
};

/** All input for the create `LahmanSalary` mutation. */
export type CreateLahmanSalaryInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `LahmanSalary` to be created by this mutation. */
  lahmanSalary: LahmanSalaryInput;
};

/** The output of our create `LahmanSalary` mutation. */
export type CreateLahmanSalaryPayload = {
  __typename?: 'CreateLahmanSalaryPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `LahmanSalary` that was created by this mutation. */
  lahmanSalary?: Maybe<LahmanSalary>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `LahmanPerson` that is related to this `LahmanSalary`. */
  lahmanPersonByPlayerId?: Maybe<LahmanPerson>;
  /** An edge for our `LahmanSalary`. May be used by Relay 1. */
  lahmanSalaryEdge?: Maybe<LahmanSalariesEdge>;
};


/** The output of our create `LahmanSalary` mutation. */
export type CreateLahmanSalaryPayloadLahmanSalaryEdgeArgs = {
  orderBy?: Maybe<Array<LahmanSalariesOrderBy>>;
};

/** All input for the create `LahmanTeam` mutation. */
export type CreateLahmanTeamInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `LahmanTeam` to be created by this mutation. */
  lahmanTeam: LahmanTeamInput;
};

/** The output of our create `LahmanTeam` mutation. */
export type CreateLahmanTeamPayload = {
  __typename?: 'CreateLahmanTeamPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `LahmanTeam` that was created by this mutation. */
  lahmanTeam?: Maybe<LahmanTeam>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** An edge for our `LahmanTeam`. May be used by Relay 1. */
  lahmanTeamEdge?: Maybe<LahmanTeamsEdge>;
};


/** The output of our create `LahmanTeam` mutation. */
export type CreateLahmanTeamPayloadLahmanTeamEdgeArgs = {
  orderBy?: Maybe<Array<LahmanTeamsOrderBy>>;
};

/** All input for the create `RetroBatting` mutation. */
export type CreateRetroBattingInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `RetroBatting` to be created by this mutation. */
  retroBatting: RetroBattingInput;
};

/** The output of our create `RetroBatting` mutation. */
export type CreateRetroBattingPayload = {
  __typename?: 'CreateRetroBattingPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `RetroBatting` that was created by this mutation. */
  retroBatting?: Maybe<RetroBatting>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `LahmanPerson` that is related to this `RetroBatting`. */
  lahmanPersonByPlayerId?: Maybe<LahmanPerson>;
  /** An edge for our `RetroBatting`. May be used by Relay 1. */
  retroBattingEdge?: Maybe<RetroBattingsEdge>;
};


/** The output of our create `RetroBatting` mutation. */
export type CreateRetroBattingPayloadRetroBattingEdgeArgs = {
  orderBy?: Maybe<Array<RetroBattingsOrderBy>>;
};

/** All input for the create `RetroEvent` mutation. */
export type CreateRetroEventInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `RetroEvent` to be created by this mutation. */
  retroEvent: RetroEventInput;
};

/** The output of our create `RetroEvent` mutation. */
export type CreateRetroEventPayload = {
  __typename?: 'CreateRetroEventPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `RetroEvent` that was created by this mutation. */
  retroEvent?: Maybe<RetroEvent>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `RetroGame` that is related to this `RetroEvent`. */
  retroGameByGameId?: Maybe<RetroGame>;
  /** Reads a single `LahmanPerson` that is related to this `RetroEvent`. */
  lahmanPersonByBatId?: Maybe<LahmanPerson>;
  /** Reads a single `LahmanPerson` that is related to this `RetroEvent`. */
  lahmanPersonByPitId?: Maybe<LahmanPerson>;
  /** An edge for our `RetroEvent`. May be used by Relay 1. */
  retroEventEdge?: Maybe<RetroEventsEdge>;
};


/** The output of our create `RetroEvent` mutation. */
export type CreateRetroEventPayloadRetroEventEdgeArgs = {
  orderBy?: Maybe<Array<RetroEventsOrderBy>>;
};

/** All input for the create `RetroFielding` mutation. */
export type CreateRetroFieldingInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `RetroFielding` to be created by this mutation. */
  retroFielding: RetroFieldingInput;
};

/** The output of our create `RetroFielding` mutation. */
export type CreateRetroFieldingPayload = {
  __typename?: 'CreateRetroFieldingPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `RetroFielding` that was created by this mutation. */
  retroFielding?: Maybe<RetroFielding>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `LahmanPerson` that is related to this `RetroFielding`. */
  lahmanPersonByPlayerId?: Maybe<LahmanPerson>;
  /** An edge for our `RetroFielding`. May be used by Relay 1. */
  retroFieldingEdge?: Maybe<RetroFieldingsEdge>;
};


/** The output of our create `RetroFielding` mutation. */
export type CreateRetroFieldingPayloadRetroFieldingEdgeArgs = {
  orderBy?: Maybe<Array<RetroFieldingsOrderBy>>;
};

/** All input for the create `RetroGame` mutation. */
export type CreateRetroGameInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `RetroGame` to be created by this mutation. */
  retroGame: RetroGameInput;
};

/** The output of our create `RetroGame` mutation. */
export type CreateRetroGamePayload = {
  __typename?: 'CreateRetroGamePayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `RetroGame` that was created by this mutation. */
  retroGame?: Maybe<RetroGame>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `LahmanPerson` that is related to this `RetroGame`. */
  lahmanPersonByWinPitId?: Maybe<LahmanPerson>;
  /** Reads a single `LahmanPerson` that is related to this `RetroGame`. */
  lahmanPersonByLosePitId?: Maybe<LahmanPerson>;
  /** Reads a single `LahmanPerson` that is related to this `RetroGame`. */
  lahmanPersonBySavePitId?: Maybe<LahmanPerson>;
  /** Reads a single `LahmanPerson` that is related to this `RetroGame`. */
  lahmanPersonByGwrbiBatId?: Maybe<LahmanPerson>;
  /** An edge for our `RetroGame`. May be used by Relay 1. */
  retroGameEdge?: Maybe<RetroGamesEdge>;
};


/** The output of our create `RetroGame` mutation. */
export type CreateRetroGamePayloadRetroGameEdgeArgs = {
  orderBy?: Maybe<Array<RetroGamesOrderBy>>;
};

/** All input for the create `RetroPitching` mutation. */
export type CreateRetroPitchingInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `RetroPitching` to be created by this mutation. */
  retroPitching: RetroPitchingInput;
};

/** The output of our create `RetroPitching` mutation. */
export type CreateRetroPitchingPayload = {
  __typename?: 'CreateRetroPitchingPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `RetroPitching` that was created by this mutation. */
  retroPitching?: Maybe<RetroPitching>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `LahmanPerson` that is related to this `RetroPitching`. */
  lahmanPersonByPlayerId?: Maybe<LahmanPerson>;
  /** An edge for our `RetroPitching`. May be used by Relay 1. */
  retroPitchingEdge?: Maybe<RetroPitchingsEdge>;
};


/** The output of our create `RetroPitching` mutation. */
export type CreateRetroPitchingPayloadRetroPitchingEdgeArgs = {
  orderBy?: Maybe<Array<RetroPitchingsOrderBy>>;
};

/** All input for the create `RetroTeamGame` mutation. */
export type CreateRetroTeamGameInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `RetroTeamGame` to be created by this mutation. */
  retroTeamGame: RetroTeamGameInput;
};

/** The output of our create `RetroTeamGame` mutation. */
export type CreateRetroTeamGamePayload = {
  __typename?: 'CreateRetroTeamGamePayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `RetroTeamGame` that was created by this mutation. */
  retroTeamGame?: Maybe<RetroTeamGame>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `LahmanTeam` that is related to this `RetroTeamGame`. */
  lahmanTeamByTeamIdAndYear?: Maybe<LahmanTeam>;
  /** An edge for our `RetroTeamGame`. May be used by Relay 1. */
  retroTeamGameEdge?: Maybe<RetroTeamGamesEdge>;
};


/** The output of our create `RetroTeamGame` mutation. */
export type CreateRetroTeamGamePayloadRetroTeamGameEdgeArgs = {
  orderBy?: Maybe<Array<RetroTeamGamesOrderBy>>;
};



/** A filter to be used against Datetime fields. All fields are combined with a logical ‘and.’ */
export type DatetimeFilter = {
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: Maybe<Scalars['Boolean']>;
  /** Equal to the specified value. */
  equalTo?: Maybe<Scalars['Datetime']>;
  /** Not equal to the specified value. */
  notEqualTo?: Maybe<Scalars['Datetime']>;
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: Maybe<Scalars['Datetime']>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: Maybe<Scalars['Datetime']>;
  /** Included in the specified list. */
  in?: Maybe<Array<Scalars['Datetime']>>;
  /** Not included in the specified list. */
  notIn?: Maybe<Array<Scalars['Datetime']>>;
  /** Less than the specified value. */
  lessThan?: Maybe<Scalars['Datetime']>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: Maybe<Scalars['Datetime']>;
  /** Greater than the specified value. */
  greaterThan?: Maybe<Scalars['Datetime']>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: Maybe<Scalars['Datetime']>;
};

/** All input for the `deleteLahmanBattingByPlayerIdAndYearAndStint` mutation. */
export type DeleteLahmanBattingByPlayerIdAndYearAndStintInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  playerId: Scalars['String'];
  year: Scalars['Int'];
  stint: Scalars['Int'];
};

/** All input for the `deleteLahmanBatting` mutation. */
export type DeleteLahmanBattingInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `LahmanBatting` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The output of our delete `LahmanBatting` mutation. */
export type DeleteLahmanBattingPayload = {
  __typename?: 'DeleteLahmanBattingPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `LahmanBatting` that was deleted by this mutation. */
  lahmanBatting?: Maybe<LahmanBatting>;
  deletedLahmanBattingId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `LahmanPerson` that is related to this `LahmanBatting`. */
  lahmanPersonByPlayerId?: Maybe<LahmanPerson>;
  /** An edge for our `LahmanBatting`. May be used by Relay 1. */
  lahmanBattingEdge?: Maybe<LahmanBattingsEdge>;
};


/** The output of our delete `LahmanBatting` mutation. */
export type DeleteLahmanBattingPayloadLahmanBattingEdgeArgs = {
  orderBy?: Maybe<Array<LahmanBattingsOrderBy>>;
};

/** All input for the `deleteLahmanBattingpostByPlayerIdAndYearAndRound` mutation. */
export type DeleteLahmanBattingpostByPlayerIdAndYearAndRoundInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  playerId: Scalars['String'];
  year: Scalars['Int'];
  round: Scalars['String'];
};

/** All input for the `deleteLahmanBattingpost` mutation. */
export type DeleteLahmanBattingpostInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `LahmanBattingpost` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The output of our delete `LahmanBattingpost` mutation. */
export type DeleteLahmanBattingpostPayload = {
  __typename?: 'DeleteLahmanBattingpostPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `LahmanBattingpost` that was deleted by this mutation. */
  lahmanBattingpost?: Maybe<LahmanBattingpost>;
  deletedLahmanBattingpostId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** An edge for our `LahmanBattingpost`. May be used by Relay 1. */
  lahmanBattingpostEdge?: Maybe<LahmanBattingpostsEdge>;
};


/** The output of our delete `LahmanBattingpost` mutation. */
export type DeleteLahmanBattingpostPayloadLahmanBattingpostEdgeArgs = {
  orderBy?: Maybe<Array<LahmanBattingpostsOrderBy>>;
};

/** All input for the `deleteLahmanFieldingByPlayerIdAndYearAndStintAndPos` mutation. */
export type DeleteLahmanFieldingByPlayerIdAndYearAndStintAndPosInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  playerId: Scalars['String'];
  year: Scalars['Int'];
  stint: Scalars['Int'];
  pos: Scalars['String'];
};

/** All input for the `deleteLahmanFielding` mutation. */
export type DeleteLahmanFieldingInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `LahmanFielding` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The output of our delete `LahmanFielding` mutation. */
export type DeleteLahmanFieldingPayload = {
  __typename?: 'DeleteLahmanFieldingPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `LahmanFielding` that was deleted by this mutation. */
  lahmanFielding?: Maybe<LahmanFielding>;
  deletedLahmanFieldingId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** An edge for our `LahmanFielding`. May be used by Relay 1. */
  lahmanFieldingEdge?: Maybe<LahmanFieldingsEdge>;
};


/** The output of our delete `LahmanFielding` mutation. */
export type DeleteLahmanFieldingPayloadLahmanFieldingEdgeArgs = {
  orderBy?: Maybe<Array<LahmanFieldingsOrderBy>>;
};

/** All input for the `deleteLahmanFieldingpostByPlayerIdAndYearAndRoundAndPos` mutation. */
export type DeleteLahmanFieldingpostByPlayerIdAndYearAndRoundAndPosInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  playerId: Scalars['String'];
  year: Scalars['Int'];
  round: Scalars['String'];
  pos: Scalars['String'];
};

/** All input for the `deleteLahmanFieldingpost` mutation. */
export type DeleteLahmanFieldingpostInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `LahmanFieldingpost` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The output of our delete `LahmanFieldingpost` mutation. */
export type DeleteLahmanFieldingpostPayload = {
  __typename?: 'DeleteLahmanFieldingpostPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `LahmanFieldingpost` that was deleted by this mutation. */
  lahmanFieldingpost?: Maybe<LahmanFieldingpost>;
  deletedLahmanFieldingpostId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** An edge for our `LahmanFieldingpost`. May be used by Relay 1. */
  lahmanFieldingpostEdge?: Maybe<LahmanFieldingpostsEdge>;
};


/** The output of our delete `LahmanFieldingpost` mutation. */
export type DeleteLahmanFieldingpostPayloadLahmanFieldingpostEdgeArgs = {
  orderBy?: Maybe<Array<LahmanFieldingpostsOrderBy>>;
};

/** All input for the `deleteLahmanParkByParkKey` mutation. */
export type DeleteLahmanParkByParkKeyInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  parkKey: Scalars['String'];
};

/** All input for the `deleteLahmanPark` mutation. */
export type DeleteLahmanParkInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `LahmanPark` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The output of our delete `LahmanPark` mutation. */
export type DeleteLahmanParkPayload = {
  __typename?: 'DeleteLahmanParkPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `LahmanPark` that was deleted by this mutation. */
  lahmanPark?: Maybe<LahmanPark>;
  deletedLahmanParkId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** An edge for our `LahmanPark`. May be used by Relay 1. */
  lahmanParkEdge?: Maybe<LahmanParksEdge>;
};


/** The output of our delete `LahmanPark` mutation. */
export type DeleteLahmanParkPayloadLahmanParkEdgeArgs = {
  orderBy?: Maybe<Array<LahmanParksOrderBy>>;
};

/** All input for the `deleteLahmanPersonByPlayerId` mutation. */
export type DeleteLahmanPersonByPlayerIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  playerId: Scalars['String'];
};

/** All input for the `deleteLahmanPersonByRetroId` mutation. */
export type DeleteLahmanPersonByRetroIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  retroId: Scalars['String'];
};

/** All input for the `deleteLahmanPerson` mutation. */
export type DeleteLahmanPersonInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `LahmanPerson` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The output of our delete `LahmanPerson` mutation. */
export type DeleteLahmanPersonPayload = {
  __typename?: 'DeleteLahmanPersonPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `LahmanPerson` that was deleted by this mutation. */
  lahmanPerson?: Maybe<LahmanPerson>;
  deletedLahmanPersonId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** An edge for our `LahmanPerson`. May be used by Relay 1. */
  lahmanPersonEdge?: Maybe<LahmanPeopleEdge>;
};


/** The output of our delete `LahmanPerson` mutation. */
export type DeleteLahmanPersonPayloadLahmanPersonEdgeArgs = {
  orderBy?: Maybe<Array<LahmanPeopleOrderBy>>;
};

/** All input for the `deleteLahmanPitchingByPlayerIdAndYearAndStint` mutation. */
export type DeleteLahmanPitchingByPlayerIdAndYearAndStintInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  playerId: Scalars['String'];
  year: Scalars['Int'];
  stint: Scalars['Int'];
};

/** All input for the `deleteLahmanPitching` mutation. */
export type DeleteLahmanPitchingInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `LahmanPitching` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The output of our delete `LahmanPitching` mutation. */
export type DeleteLahmanPitchingPayload = {
  __typename?: 'DeleteLahmanPitchingPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `LahmanPitching` that was deleted by this mutation. */
  lahmanPitching?: Maybe<LahmanPitching>;
  deletedLahmanPitchingId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `LahmanPerson` that is related to this `LahmanPitching`. */
  lahmanPersonByPlayerId?: Maybe<LahmanPerson>;
  /** An edge for our `LahmanPitching`. May be used by Relay 1. */
  lahmanPitchingEdge?: Maybe<LahmanPitchingsEdge>;
};


/** The output of our delete `LahmanPitching` mutation. */
export type DeleteLahmanPitchingPayloadLahmanPitchingEdgeArgs = {
  orderBy?: Maybe<Array<LahmanPitchingsOrderBy>>;
};

/** All input for the `deleteLahmanPitchingpostByPlayerIdAndYearAndRound` mutation. */
export type DeleteLahmanPitchingpostByPlayerIdAndYearAndRoundInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  playerId: Scalars['String'];
  year: Scalars['Int'];
  round: Scalars['String'];
};

/** All input for the `deleteLahmanPitchingpost` mutation. */
export type DeleteLahmanPitchingpostInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `LahmanPitchingpost` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The output of our delete `LahmanPitchingpost` mutation. */
export type DeleteLahmanPitchingpostPayload = {
  __typename?: 'DeleteLahmanPitchingpostPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `LahmanPitchingpost` that was deleted by this mutation. */
  lahmanPitchingpost?: Maybe<LahmanPitchingpost>;
  deletedLahmanPitchingpostId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `LahmanPerson` that is related to this `LahmanPitchingpost`. */
  lahmanPersonByPlayerId?: Maybe<LahmanPerson>;
  /** An edge for our `LahmanPitchingpost`. May be used by Relay 1. */
  lahmanPitchingpostEdge?: Maybe<LahmanPitchingpostsEdge>;
};


/** The output of our delete `LahmanPitchingpost` mutation. */
export type DeleteLahmanPitchingpostPayloadLahmanPitchingpostEdgeArgs = {
  orderBy?: Maybe<Array<LahmanPitchingpostsOrderBy>>;
};

/** All input for the `deleteLahmanSalaryByPlayerIdAndYearAndTeamId` mutation. */
export type DeleteLahmanSalaryByPlayerIdAndYearAndTeamIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  playerId: Scalars['String'];
  year: Scalars['Int'];
  teamId: Scalars['String'];
};

/** All input for the `deleteLahmanSalary` mutation. */
export type DeleteLahmanSalaryInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `LahmanSalary` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The output of our delete `LahmanSalary` mutation. */
export type DeleteLahmanSalaryPayload = {
  __typename?: 'DeleteLahmanSalaryPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `LahmanSalary` that was deleted by this mutation. */
  lahmanSalary?: Maybe<LahmanSalary>;
  deletedLahmanSalaryId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `LahmanPerson` that is related to this `LahmanSalary`. */
  lahmanPersonByPlayerId?: Maybe<LahmanPerson>;
  /** An edge for our `LahmanSalary`. May be used by Relay 1. */
  lahmanSalaryEdge?: Maybe<LahmanSalariesEdge>;
};


/** The output of our delete `LahmanSalary` mutation. */
export type DeleteLahmanSalaryPayloadLahmanSalaryEdgeArgs = {
  orderBy?: Maybe<Array<LahmanSalariesOrderBy>>;
};

/** All input for the `deleteLahmanTeamByTeamIdAndYear` mutation. */
export type DeleteLahmanTeamByTeamIdAndYearInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  teamId: Scalars['String'];
  year: Scalars['Int'];
};

/** All input for the `deleteLahmanTeamByTeamIdRetroAndYear` mutation. */
export type DeleteLahmanTeamByTeamIdRetroAndYearInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  teamIdRetro: Scalars['String'];
  year: Scalars['Int'];
};

/** All input for the `deleteLahmanTeam` mutation. */
export type DeleteLahmanTeamInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `LahmanTeam` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The output of our delete `LahmanTeam` mutation. */
export type DeleteLahmanTeamPayload = {
  __typename?: 'DeleteLahmanTeamPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `LahmanTeam` that was deleted by this mutation. */
  lahmanTeam?: Maybe<LahmanTeam>;
  deletedLahmanTeamId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** An edge for our `LahmanTeam`. May be used by Relay 1. */
  lahmanTeamEdge?: Maybe<LahmanTeamsEdge>;
};


/** The output of our delete `LahmanTeam` mutation. */
export type DeleteLahmanTeamPayloadLahmanTeamEdgeArgs = {
  orderBy?: Maybe<Array<LahmanTeamsOrderBy>>;
};

/** All input for the `deleteRetroBattingByPlayerIdAndGameId` mutation. */
export type DeleteRetroBattingByPlayerIdAndGameIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  playerId: Scalars['String'];
  gameId: Scalars['String'];
};

/** All input for the `deleteRetroBatting` mutation. */
export type DeleteRetroBattingInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `RetroBatting` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The output of our delete `RetroBatting` mutation. */
export type DeleteRetroBattingPayload = {
  __typename?: 'DeleteRetroBattingPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `RetroBatting` that was deleted by this mutation. */
  retroBatting?: Maybe<RetroBatting>;
  deletedRetroBattingId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `LahmanPerson` that is related to this `RetroBatting`. */
  lahmanPersonByPlayerId?: Maybe<LahmanPerson>;
  /** An edge for our `RetroBatting`. May be used by Relay 1. */
  retroBattingEdge?: Maybe<RetroBattingsEdge>;
};


/** The output of our delete `RetroBatting` mutation. */
export type DeleteRetroBattingPayloadRetroBattingEdgeArgs = {
  orderBy?: Maybe<Array<RetroBattingsOrderBy>>;
};

/** All input for the `deleteRetroEventByGameIdAndEventId` mutation. */
export type DeleteRetroEventByGameIdAndEventIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  gameId: Scalars['String'];
  eventId: Scalars['Int'];
};

/** All input for the `deleteRetroEvent` mutation. */
export type DeleteRetroEventInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `RetroEvent` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The output of our delete `RetroEvent` mutation. */
export type DeleteRetroEventPayload = {
  __typename?: 'DeleteRetroEventPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `RetroEvent` that was deleted by this mutation. */
  retroEvent?: Maybe<RetroEvent>;
  deletedRetroEventId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `RetroGame` that is related to this `RetroEvent`. */
  retroGameByGameId?: Maybe<RetroGame>;
  /** Reads a single `LahmanPerson` that is related to this `RetroEvent`. */
  lahmanPersonByBatId?: Maybe<LahmanPerson>;
  /** Reads a single `LahmanPerson` that is related to this `RetroEvent`. */
  lahmanPersonByPitId?: Maybe<LahmanPerson>;
  /** An edge for our `RetroEvent`. May be used by Relay 1. */
  retroEventEdge?: Maybe<RetroEventsEdge>;
};


/** The output of our delete `RetroEvent` mutation. */
export type DeleteRetroEventPayloadRetroEventEdgeArgs = {
  orderBy?: Maybe<Array<RetroEventsOrderBy>>;
};

/** All input for the `deleteRetroFieldingByPlayerIdAndGameIdAndPos` mutation. */
export type DeleteRetroFieldingByPlayerIdAndGameIdAndPosInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  playerId: Scalars['String'];
  gameId: Scalars['String'];
  pos: Scalars['String'];
};

/** All input for the `deleteRetroFielding` mutation. */
export type DeleteRetroFieldingInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `RetroFielding` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The output of our delete `RetroFielding` mutation. */
export type DeleteRetroFieldingPayload = {
  __typename?: 'DeleteRetroFieldingPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `RetroFielding` that was deleted by this mutation. */
  retroFielding?: Maybe<RetroFielding>;
  deletedRetroFieldingId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `LahmanPerson` that is related to this `RetroFielding`. */
  lahmanPersonByPlayerId?: Maybe<LahmanPerson>;
  /** An edge for our `RetroFielding`. May be used by Relay 1. */
  retroFieldingEdge?: Maybe<RetroFieldingsEdge>;
};


/** The output of our delete `RetroFielding` mutation. */
export type DeleteRetroFieldingPayloadRetroFieldingEdgeArgs = {
  orderBy?: Maybe<Array<RetroFieldingsOrderBy>>;
};

/** All input for the `deleteRetroGameByGameId` mutation. */
export type DeleteRetroGameByGameIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  gameId: Scalars['String'];
};

/** All input for the `deleteRetroGame` mutation. */
export type DeleteRetroGameInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `RetroGame` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The output of our delete `RetroGame` mutation. */
export type DeleteRetroGamePayload = {
  __typename?: 'DeleteRetroGamePayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `RetroGame` that was deleted by this mutation. */
  retroGame?: Maybe<RetroGame>;
  deletedRetroGameId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `LahmanPerson` that is related to this `RetroGame`. */
  lahmanPersonByWinPitId?: Maybe<LahmanPerson>;
  /** Reads a single `LahmanPerson` that is related to this `RetroGame`. */
  lahmanPersonByLosePitId?: Maybe<LahmanPerson>;
  /** Reads a single `LahmanPerson` that is related to this `RetroGame`. */
  lahmanPersonBySavePitId?: Maybe<LahmanPerson>;
  /** Reads a single `LahmanPerson` that is related to this `RetroGame`. */
  lahmanPersonByGwrbiBatId?: Maybe<LahmanPerson>;
  /** An edge for our `RetroGame`. May be used by Relay 1. */
  retroGameEdge?: Maybe<RetroGamesEdge>;
};


/** The output of our delete `RetroGame` mutation. */
export type DeleteRetroGamePayloadRetroGameEdgeArgs = {
  orderBy?: Maybe<Array<RetroGamesOrderBy>>;
};

/** All input for the `deleteRetroPitchingByPlayerIdAndGameId` mutation. */
export type DeleteRetroPitchingByPlayerIdAndGameIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  playerId: Scalars['String'];
  gameId: Scalars['String'];
};

/** All input for the `deleteRetroPitching` mutation. */
export type DeleteRetroPitchingInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `RetroPitching` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The output of our delete `RetroPitching` mutation. */
export type DeleteRetroPitchingPayload = {
  __typename?: 'DeleteRetroPitchingPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `RetroPitching` that was deleted by this mutation. */
  retroPitching?: Maybe<RetroPitching>;
  deletedRetroPitchingId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `LahmanPerson` that is related to this `RetroPitching`. */
  lahmanPersonByPlayerId?: Maybe<LahmanPerson>;
  /** An edge for our `RetroPitching`. May be used by Relay 1. */
  retroPitchingEdge?: Maybe<RetroPitchingsEdge>;
};


/** The output of our delete `RetroPitching` mutation. */
export type DeleteRetroPitchingPayloadRetroPitchingEdgeArgs = {
  orderBy?: Maybe<Array<RetroPitchingsOrderBy>>;
};

/** All input for the `deleteRetroTeamGameByTeamIdAndGameId` mutation. */
export type DeleteRetroTeamGameByTeamIdAndGameIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  teamId: Scalars['String'];
  gameId: Scalars['String'];
};

/** All input for the `deleteRetroTeamGame` mutation. */
export type DeleteRetroTeamGameInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `RetroTeamGame` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The output of our delete `RetroTeamGame` mutation. */
export type DeleteRetroTeamGamePayload = {
  __typename?: 'DeleteRetroTeamGamePayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `RetroTeamGame` that was deleted by this mutation. */
  retroTeamGame?: Maybe<RetroTeamGame>;
  deletedRetroTeamGameId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `LahmanTeam` that is related to this `RetroTeamGame`. */
  lahmanTeamByTeamIdAndYear?: Maybe<LahmanTeam>;
  /** An edge for our `RetroTeamGame`. May be used by Relay 1. */
  retroTeamGameEdge?: Maybe<RetroTeamGamesEdge>;
};


/** The output of our delete `RetroTeamGame` mutation. */
export type DeleteRetroTeamGamePayloadRetroTeamGameEdgeArgs = {
  orderBy?: Maybe<Array<RetroTeamGamesOrderBy>>;
};

/** A filter to be used against Float fields. All fields are combined with a logical ‘and.’ */
export type FloatFilter = {
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: Maybe<Scalars['Boolean']>;
  /** Equal to the specified value. */
  equalTo?: Maybe<Scalars['Float']>;
  /** Not equal to the specified value. */
  notEqualTo?: Maybe<Scalars['Float']>;
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: Maybe<Scalars['Float']>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: Maybe<Scalars['Float']>;
  /** Included in the specified list. */
  in?: Maybe<Array<Scalars['Float']>>;
  /** Not included in the specified list. */
  notIn?: Maybe<Array<Scalars['Float']>>;
  /** Less than the specified value. */
  lessThan?: Maybe<Scalars['Float']>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: Maybe<Scalars['Float']>;
  /** Greater than the specified value. */
  greaterThan?: Maybe<Scalars['Float']>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: Maybe<Scalars['Float']>;
};

/** A filter to be used against Int fields. All fields are combined with a logical ‘and.’ */
export type IntFilter = {
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: Maybe<Scalars['Boolean']>;
  /** Equal to the specified value. */
  equalTo?: Maybe<Scalars['Int']>;
  /** Not equal to the specified value. */
  notEqualTo?: Maybe<Scalars['Int']>;
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: Maybe<Scalars['Int']>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: Maybe<Scalars['Int']>;
  /** Included in the specified list. */
  in?: Maybe<Array<Scalars['Int']>>;
  /** Not included in the specified list. */
  notIn?: Maybe<Array<Scalars['Int']>>;
  /** Less than the specified value. */
  lessThan?: Maybe<Scalars['Int']>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: Maybe<Scalars['Int']>;
  /** Greater than the specified value. */
  greaterThan?: Maybe<Scalars['Int']>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: Maybe<Scalars['Int']>;
};

export type LahmanBatting = Node & {
  __typename?: 'LahmanBatting';
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  playerId: Scalars['String'];
  year: Scalars['Int'];
  stint: Scalars['Int'];
  teamId?: Maybe<Scalars['String']>;
  lgId?: Maybe<Scalars['String']>;
  g?: Maybe<Scalars['Int']>;
  ab?: Maybe<Scalars['Int']>;
  r?: Maybe<Scalars['Int']>;
  h?: Maybe<Scalars['Int']>;
  double?: Maybe<Scalars['Int']>;
  triple?: Maybe<Scalars['Int']>;
  hr?: Maybe<Scalars['Int']>;
  rbi?: Maybe<Scalars['Int']>;
  sb?: Maybe<Scalars['Int']>;
  cs?: Maybe<Scalars['Int']>;
  bb?: Maybe<Scalars['Int']>;
  so?: Maybe<Scalars['Int']>;
  ibb?: Maybe<Scalars['Int']>;
  hbp?: Maybe<Scalars['Int']>;
  sh?: Maybe<Scalars['Int']>;
  sf?: Maybe<Scalars['Int']>;
  gidp?: Maybe<Scalars['Int']>;
  ba?: Maybe<Scalars['Float']>;
  obp?: Maybe<Scalars['Float']>;
  slg?: Maybe<Scalars['Float']>;
  ops?: Maybe<Scalars['Float']>;
  pa?: Maybe<Scalars['Int']>;
  /** Reads a single `LahmanPerson` that is related to this `LahmanBatting`. */
  lahmanPersonByPlayerId?: Maybe<LahmanPerson>;
};

/**
 * A condition to be used against `LahmanBatting` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type LahmanBattingCondition = {
  /** Checks for equality with the object’s `playerId` field. */
  playerId?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `year` field. */
  year?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `stint` field. */
  stint?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `teamId` field. */
  teamId?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `lgId` field. */
  lgId?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `g` field. */
  g?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `ab` field. */
  ab?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `r` field. */
  r?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `h` field. */
  h?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `double` field. */
  double?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `triple` field. */
  triple?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `hr` field. */
  hr?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `rbi` field. */
  rbi?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `sb` field. */
  sb?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `cs` field. */
  cs?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `bb` field. */
  bb?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `so` field. */
  so?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `ibb` field. */
  ibb?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `hbp` field. */
  hbp?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `sh` field. */
  sh?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `sf` field. */
  sf?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `gidp` field. */
  gidp?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `ba` field. */
  ba?: Maybe<Scalars['Float']>;
  /** Checks for equality with the object’s `obp` field. */
  obp?: Maybe<Scalars['Float']>;
  /** Checks for equality with the object’s `slg` field. */
  slg?: Maybe<Scalars['Float']>;
  /** Checks for equality with the object’s `ops` field. */
  ops?: Maybe<Scalars['Float']>;
  /** Checks for equality with the object’s `pa` field. */
  pa?: Maybe<Scalars['Int']>;
};

/** A filter to be used against `LahmanBatting` object types. All fields are combined with a logical ‘and.’ */
export type LahmanBattingFilter = {
  /** Filter by the object’s `playerId` field. */
  playerId?: Maybe<StringFilter>;
  /** Filter by the object’s `year` field. */
  year?: Maybe<IntFilter>;
  /** Filter by the object’s `stint` field. */
  stint?: Maybe<IntFilter>;
  /** Filter by the object’s `teamId` field. */
  teamId?: Maybe<StringFilter>;
  /** Filter by the object’s `lgId` field. */
  lgId?: Maybe<StringFilter>;
  /** Filter by the object’s `g` field. */
  g?: Maybe<IntFilter>;
  /** Filter by the object’s `ab` field. */
  ab?: Maybe<IntFilter>;
  /** Filter by the object’s `r` field. */
  r?: Maybe<IntFilter>;
  /** Filter by the object’s `h` field. */
  h?: Maybe<IntFilter>;
  /** Filter by the object’s `double` field. */
  double?: Maybe<IntFilter>;
  /** Filter by the object’s `triple` field. */
  triple?: Maybe<IntFilter>;
  /** Filter by the object’s `hr` field. */
  hr?: Maybe<IntFilter>;
  /** Filter by the object’s `rbi` field. */
  rbi?: Maybe<IntFilter>;
  /** Filter by the object’s `sb` field. */
  sb?: Maybe<IntFilter>;
  /** Filter by the object’s `cs` field. */
  cs?: Maybe<IntFilter>;
  /** Filter by the object’s `bb` field. */
  bb?: Maybe<IntFilter>;
  /** Filter by the object’s `so` field. */
  so?: Maybe<IntFilter>;
  /** Filter by the object’s `ibb` field. */
  ibb?: Maybe<IntFilter>;
  /** Filter by the object’s `hbp` field. */
  hbp?: Maybe<IntFilter>;
  /** Filter by the object’s `sh` field. */
  sh?: Maybe<IntFilter>;
  /** Filter by the object’s `sf` field. */
  sf?: Maybe<IntFilter>;
  /** Filter by the object’s `gidp` field. */
  gidp?: Maybe<IntFilter>;
  /** Filter by the object’s `ba` field. */
  ba?: Maybe<FloatFilter>;
  /** Filter by the object’s `obp` field. */
  obp?: Maybe<FloatFilter>;
  /** Filter by the object’s `slg` field. */
  slg?: Maybe<FloatFilter>;
  /** Filter by the object’s `ops` field. */
  ops?: Maybe<FloatFilter>;
  /** Filter by the object’s `pa` field. */
  pa?: Maybe<IntFilter>;
  /** Checks for all expressions in this list. */
  and?: Maybe<Array<LahmanBattingFilter>>;
  /** Checks for any expressions in this list. */
  or?: Maybe<Array<LahmanBattingFilter>>;
  /** Negates the expression. */
  not?: Maybe<LahmanBattingFilter>;
};

/** An input for mutations affecting `LahmanBatting` */
export type LahmanBattingInput = {
  playerId: Scalars['String'];
  year: Scalars['Int'];
  stint: Scalars['Int'];
  teamId?: Maybe<Scalars['String']>;
  lgId?: Maybe<Scalars['String']>;
  g?: Maybe<Scalars['Int']>;
  ab?: Maybe<Scalars['Int']>;
  r?: Maybe<Scalars['Int']>;
  h?: Maybe<Scalars['Int']>;
  double?: Maybe<Scalars['Int']>;
  triple?: Maybe<Scalars['Int']>;
  hr?: Maybe<Scalars['Int']>;
  rbi?: Maybe<Scalars['Int']>;
  sb?: Maybe<Scalars['Int']>;
  cs?: Maybe<Scalars['Int']>;
  bb?: Maybe<Scalars['Int']>;
  so?: Maybe<Scalars['Int']>;
  ibb?: Maybe<Scalars['Int']>;
  hbp?: Maybe<Scalars['Int']>;
  sh?: Maybe<Scalars['Int']>;
  sf?: Maybe<Scalars['Int']>;
  gidp?: Maybe<Scalars['Int']>;
  ba?: Maybe<Scalars['Float']>;
  obp?: Maybe<Scalars['Float']>;
  slg?: Maybe<Scalars['Float']>;
  ops?: Maybe<Scalars['Float']>;
  pa?: Maybe<Scalars['Int']>;
};

/** Represents an update to a `LahmanBatting`. Fields that are set will be updated. */
export type LahmanBattingPatch = {
  playerId?: Maybe<Scalars['String']>;
  year?: Maybe<Scalars['Int']>;
  stint?: Maybe<Scalars['Int']>;
  teamId?: Maybe<Scalars['String']>;
  lgId?: Maybe<Scalars['String']>;
  g?: Maybe<Scalars['Int']>;
  ab?: Maybe<Scalars['Int']>;
  r?: Maybe<Scalars['Int']>;
  h?: Maybe<Scalars['Int']>;
  double?: Maybe<Scalars['Int']>;
  triple?: Maybe<Scalars['Int']>;
  hr?: Maybe<Scalars['Int']>;
  rbi?: Maybe<Scalars['Int']>;
  sb?: Maybe<Scalars['Int']>;
  cs?: Maybe<Scalars['Int']>;
  bb?: Maybe<Scalars['Int']>;
  so?: Maybe<Scalars['Int']>;
  ibb?: Maybe<Scalars['Int']>;
  hbp?: Maybe<Scalars['Int']>;
  sh?: Maybe<Scalars['Int']>;
  sf?: Maybe<Scalars['Int']>;
  gidp?: Maybe<Scalars['Int']>;
  ba?: Maybe<Scalars['Float']>;
  obp?: Maybe<Scalars['Float']>;
  slg?: Maybe<Scalars['Float']>;
  ops?: Maybe<Scalars['Float']>;
  pa?: Maybe<Scalars['Int']>;
};

export type LahmanBattingpost = Node & {
  __typename?: 'LahmanBattingpost';
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  year: Scalars['Int'];
  round: Scalars['String'];
  playerId: Scalars['String'];
  teamId?: Maybe<Scalars['String']>;
  lgId?: Maybe<Scalars['String']>;
  g?: Maybe<Scalars['Int']>;
  ab?: Maybe<Scalars['Int']>;
  r?: Maybe<Scalars['Int']>;
  h?: Maybe<Scalars['Int']>;
  double?: Maybe<Scalars['Int']>;
  triple?: Maybe<Scalars['Int']>;
  hr?: Maybe<Scalars['Int']>;
  rbi?: Maybe<Scalars['Int']>;
  sb?: Maybe<Scalars['Int']>;
  cs?: Maybe<Scalars['Int']>;
  bb?: Maybe<Scalars['Int']>;
  so?: Maybe<Scalars['Int']>;
  ibb?: Maybe<Scalars['Int']>;
  hbp?: Maybe<Scalars['Int']>;
  sh?: Maybe<Scalars['Int']>;
  sf?: Maybe<Scalars['Int']>;
  gidp?: Maybe<Scalars['Int']>;
  ba?: Maybe<Scalars['Float']>;
  obp?: Maybe<Scalars['Float']>;
  slg?: Maybe<Scalars['Float']>;
  ops?: Maybe<Scalars['Float']>;
  pa?: Maybe<Scalars['Int']>;
};

/**
 * A condition to be used against `LahmanBattingpost` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type LahmanBattingpostCondition = {
  /** Checks for equality with the object’s `year` field. */
  year?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `round` field. */
  round?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `playerId` field. */
  playerId?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `teamId` field. */
  teamId?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `lgId` field. */
  lgId?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `g` field. */
  g?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `ab` field. */
  ab?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `r` field. */
  r?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `h` field. */
  h?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `double` field. */
  double?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `triple` field. */
  triple?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `hr` field. */
  hr?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `rbi` field. */
  rbi?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `sb` field. */
  sb?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `cs` field. */
  cs?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `bb` field. */
  bb?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `so` field. */
  so?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `ibb` field. */
  ibb?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `hbp` field. */
  hbp?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `sh` field. */
  sh?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `sf` field. */
  sf?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `gidp` field. */
  gidp?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `ba` field. */
  ba?: Maybe<Scalars['Float']>;
  /** Checks for equality with the object’s `obp` field. */
  obp?: Maybe<Scalars['Float']>;
  /** Checks for equality with the object’s `slg` field. */
  slg?: Maybe<Scalars['Float']>;
  /** Checks for equality with the object’s `ops` field. */
  ops?: Maybe<Scalars['Float']>;
  /** Checks for equality with the object’s `pa` field. */
  pa?: Maybe<Scalars['Int']>;
};

/** A filter to be used against `LahmanBattingpost` object types. All fields are combined with a logical ‘and.’ */
export type LahmanBattingpostFilter = {
  /** Filter by the object’s `year` field. */
  year?: Maybe<IntFilter>;
  /** Filter by the object’s `round` field. */
  round?: Maybe<StringFilter>;
  /** Filter by the object’s `playerId` field. */
  playerId?: Maybe<StringFilter>;
  /** Filter by the object’s `teamId` field. */
  teamId?: Maybe<StringFilter>;
  /** Filter by the object’s `lgId` field. */
  lgId?: Maybe<StringFilter>;
  /** Filter by the object’s `g` field. */
  g?: Maybe<IntFilter>;
  /** Filter by the object’s `ab` field. */
  ab?: Maybe<IntFilter>;
  /** Filter by the object’s `r` field. */
  r?: Maybe<IntFilter>;
  /** Filter by the object’s `h` field. */
  h?: Maybe<IntFilter>;
  /** Filter by the object’s `double` field. */
  double?: Maybe<IntFilter>;
  /** Filter by the object’s `triple` field. */
  triple?: Maybe<IntFilter>;
  /** Filter by the object’s `hr` field. */
  hr?: Maybe<IntFilter>;
  /** Filter by the object’s `rbi` field. */
  rbi?: Maybe<IntFilter>;
  /** Filter by the object’s `sb` field. */
  sb?: Maybe<IntFilter>;
  /** Filter by the object’s `cs` field. */
  cs?: Maybe<IntFilter>;
  /** Filter by the object’s `bb` field. */
  bb?: Maybe<IntFilter>;
  /** Filter by the object’s `so` field. */
  so?: Maybe<IntFilter>;
  /** Filter by the object’s `ibb` field. */
  ibb?: Maybe<IntFilter>;
  /** Filter by the object’s `hbp` field. */
  hbp?: Maybe<IntFilter>;
  /** Filter by the object’s `sh` field. */
  sh?: Maybe<IntFilter>;
  /** Filter by the object’s `sf` field. */
  sf?: Maybe<IntFilter>;
  /** Filter by the object’s `gidp` field. */
  gidp?: Maybe<IntFilter>;
  /** Filter by the object’s `ba` field. */
  ba?: Maybe<FloatFilter>;
  /** Filter by the object’s `obp` field. */
  obp?: Maybe<FloatFilter>;
  /** Filter by the object’s `slg` field. */
  slg?: Maybe<FloatFilter>;
  /** Filter by the object’s `ops` field. */
  ops?: Maybe<FloatFilter>;
  /** Filter by the object’s `pa` field. */
  pa?: Maybe<IntFilter>;
  /** Checks for all expressions in this list. */
  and?: Maybe<Array<LahmanBattingpostFilter>>;
  /** Checks for any expressions in this list. */
  or?: Maybe<Array<LahmanBattingpostFilter>>;
  /** Negates the expression. */
  not?: Maybe<LahmanBattingpostFilter>;
};

/** An input for mutations affecting `LahmanBattingpost` */
export type LahmanBattingpostInput = {
  year: Scalars['Int'];
  round: Scalars['String'];
  playerId: Scalars['String'];
  teamId?: Maybe<Scalars['String']>;
  lgId?: Maybe<Scalars['String']>;
  g?: Maybe<Scalars['Int']>;
  ab?: Maybe<Scalars['Int']>;
  r?: Maybe<Scalars['Int']>;
  h?: Maybe<Scalars['Int']>;
  double?: Maybe<Scalars['Int']>;
  triple?: Maybe<Scalars['Int']>;
  hr?: Maybe<Scalars['Int']>;
  rbi?: Maybe<Scalars['Int']>;
  sb?: Maybe<Scalars['Int']>;
  cs?: Maybe<Scalars['Int']>;
  bb?: Maybe<Scalars['Int']>;
  so?: Maybe<Scalars['Int']>;
  ibb?: Maybe<Scalars['Int']>;
  hbp?: Maybe<Scalars['Int']>;
  sh?: Maybe<Scalars['Int']>;
  sf?: Maybe<Scalars['Int']>;
  gidp?: Maybe<Scalars['Int']>;
  ba?: Maybe<Scalars['Float']>;
  obp?: Maybe<Scalars['Float']>;
  slg?: Maybe<Scalars['Float']>;
  ops?: Maybe<Scalars['Float']>;
  pa?: Maybe<Scalars['Int']>;
};

/** Represents an update to a `LahmanBattingpost`. Fields that are set will be updated. */
export type LahmanBattingpostPatch = {
  year?: Maybe<Scalars['Int']>;
  round?: Maybe<Scalars['String']>;
  playerId?: Maybe<Scalars['String']>;
  teamId?: Maybe<Scalars['String']>;
  lgId?: Maybe<Scalars['String']>;
  g?: Maybe<Scalars['Int']>;
  ab?: Maybe<Scalars['Int']>;
  r?: Maybe<Scalars['Int']>;
  h?: Maybe<Scalars['Int']>;
  double?: Maybe<Scalars['Int']>;
  triple?: Maybe<Scalars['Int']>;
  hr?: Maybe<Scalars['Int']>;
  rbi?: Maybe<Scalars['Int']>;
  sb?: Maybe<Scalars['Int']>;
  cs?: Maybe<Scalars['Int']>;
  bb?: Maybe<Scalars['Int']>;
  so?: Maybe<Scalars['Int']>;
  ibb?: Maybe<Scalars['Int']>;
  hbp?: Maybe<Scalars['Int']>;
  sh?: Maybe<Scalars['Int']>;
  sf?: Maybe<Scalars['Int']>;
  gidp?: Maybe<Scalars['Int']>;
  ba?: Maybe<Scalars['Float']>;
  obp?: Maybe<Scalars['Float']>;
  slg?: Maybe<Scalars['Float']>;
  ops?: Maybe<Scalars['Float']>;
  pa?: Maybe<Scalars['Int']>;
};

/** A connection to a list of `LahmanBattingpost` values. */
export type LahmanBattingpostsConnection = {
  __typename?: 'LahmanBattingpostsConnection';
  /** A list of `LahmanBattingpost` objects. */
  nodes: Array<Maybe<LahmanBattingpost>>;
  /** A list of edges which contains the `LahmanBattingpost` and cursor to aid in pagination. */
  edges: Array<LahmanBattingpostsEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `LahmanBattingpost` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `LahmanBattingpost` edge in the connection. */
export type LahmanBattingpostsEdge = {
  __typename?: 'LahmanBattingpostsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `LahmanBattingpost` at the end of the edge. */
  node?: Maybe<LahmanBattingpost>;
};

/** Methods to use when ordering `LahmanBattingpost`. */
export enum LahmanBattingpostsOrderBy {
  Natural = 'NATURAL',
  YearAsc = 'YEAR_ASC',
  YearDesc = 'YEAR_DESC',
  RoundAsc = 'ROUND_ASC',
  RoundDesc = 'ROUND_DESC',
  PlayerIdAsc = 'PLAYER_ID_ASC',
  PlayerIdDesc = 'PLAYER_ID_DESC',
  TeamIdAsc = 'TEAM_ID_ASC',
  TeamIdDesc = 'TEAM_ID_DESC',
  LgIdAsc = 'LG_ID_ASC',
  LgIdDesc = 'LG_ID_DESC',
  GAsc = 'G_ASC',
  GDesc = 'G_DESC',
  AbAsc = 'AB_ASC',
  AbDesc = 'AB_DESC',
  RAsc = 'R_ASC',
  RDesc = 'R_DESC',
  HAsc = 'H_ASC',
  HDesc = 'H_DESC',
  DoubleAsc = 'DOUBLE_ASC',
  DoubleDesc = 'DOUBLE_DESC',
  TripleAsc = 'TRIPLE_ASC',
  TripleDesc = 'TRIPLE_DESC',
  HrAsc = 'HR_ASC',
  HrDesc = 'HR_DESC',
  RbiAsc = 'RBI_ASC',
  RbiDesc = 'RBI_DESC',
  SbAsc = 'SB_ASC',
  SbDesc = 'SB_DESC',
  CsAsc = 'CS_ASC',
  CsDesc = 'CS_DESC',
  BbAsc = 'BB_ASC',
  BbDesc = 'BB_DESC',
  SoAsc = 'SO_ASC',
  SoDesc = 'SO_DESC',
  IbbAsc = 'IBB_ASC',
  IbbDesc = 'IBB_DESC',
  HbpAsc = 'HBP_ASC',
  HbpDesc = 'HBP_DESC',
  ShAsc = 'SH_ASC',
  ShDesc = 'SH_DESC',
  SfAsc = 'SF_ASC',
  SfDesc = 'SF_DESC',
  GidpAsc = 'GIDP_ASC',
  GidpDesc = 'GIDP_DESC',
  BaAsc = 'BA_ASC',
  BaDesc = 'BA_DESC',
  ObpAsc = 'OBP_ASC',
  ObpDesc = 'OBP_DESC',
  SlgAsc = 'SLG_ASC',
  SlgDesc = 'SLG_DESC',
  OpsAsc = 'OPS_ASC',
  OpsDesc = 'OPS_DESC',
  PaAsc = 'PA_ASC',
  PaDesc = 'PA_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

/** A connection to a list of `LahmanBatting` values. */
export type LahmanBattingsConnection = {
  __typename?: 'LahmanBattingsConnection';
  /** A list of `LahmanBatting` objects. */
  nodes: Array<Maybe<LahmanBatting>>;
  /** A list of edges which contains the `LahmanBatting` and cursor to aid in pagination. */
  edges: Array<LahmanBattingsEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `LahmanBatting` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `LahmanBatting` edge in the connection. */
export type LahmanBattingsEdge = {
  __typename?: 'LahmanBattingsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `LahmanBatting` at the end of the edge. */
  node?: Maybe<LahmanBatting>;
};

/** Methods to use when ordering `LahmanBatting`. */
export enum LahmanBattingsOrderBy {
  Natural = 'NATURAL',
  PlayerIdAsc = 'PLAYER_ID_ASC',
  PlayerIdDesc = 'PLAYER_ID_DESC',
  YearAsc = 'YEAR_ASC',
  YearDesc = 'YEAR_DESC',
  StintAsc = 'STINT_ASC',
  StintDesc = 'STINT_DESC',
  TeamIdAsc = 'TEAM_ID_ASC',
  TeamIdDesc = 'TEAM_ID_DESC',
  LgIdAsc = 'LG_ID_ASC',
  LgIdDesc = 'LG_ID_DESC',
  GAsc = 'G_ASC',
  GDesc = 'G_DESC',
  AbAsc = 'AB_ASC',
  AbDesc = 'AB_DESC',
  RAsc = 'R_ASC',
  RDesc = 'R_DESC',
  HAsc = 'H_ASC',
  HDesc = 'H_DESC',
  DoubleAsc = 'DOUBLE_ASC',
  DoubleDesc = 'DOUBLE_DESC',
  TripleAsc = 'TRIPLE_ASC',
  TripleDesc = 'TRIPLE_DESC',
  HrAsc = 'HR_ASC',
  HrDesc = 'HR_DESC',
  RbiAsc = 'RBI_ASC',
  RbiDesc = 'RBI_DESC',
  SbAsc = 'SB_ASC',
  SbDesc = 'SB_DESC',
  CsAsc = 'CS_ASC',
  CsDesc = 'CS_DESC',
  BbAsc = 'BB_ASC',
  BbDesc = 'BB_DESC',
  SoAsc = 'SO_ASC',
  SoDesc = 'SO_DESC',
  IbbAsc = 'IBB_ASC',
  IbbDesc = 'IBB_DESC',
  HbpAsc = 'HBP_ASC',
  HbpDesc = 'HBP_DESC',
  ShAsc = 'SH_ASC',
  ShDesc = 'SH_DESC',
  SfAsc = 'SF_ASC',
  SfDesc = 'SF_DESC',
  GidpAsc = 'GIDP_ASC',
  GidpDesc = 'GIDP_DESC',
  BaAsc = 'BA_ASC',
  BaDesc = 'BA_DESC',
  ObpAsc = 'OBP_ASC',
  ObpDesc = 'OBP_DESC',
  SlgAsc = 'SLG_ASC',
  SlgDesc = 'SLG_DESC',
  OpsAsc = 'OPS_ASC',
  OpsDesc = 'OPS_DESC',
  PaAsc = 'PA_ASC',
  PaDesc = 'PA_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

export type LahmanFielding = Node & {
  __typename?: 'LahmanFielding';
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  playerId: Scalars['String'];
  year: Scalars['Int'];
  stint: Scalars['Int'];
  teamId?: Maybe<Scalars['String']>;
  lgId?: Maybe<Scalars['String']>;
  pos: Scalars['String'];
  g?: Maybe<Scalars['Int']>;
  gs?: Maybe<Scalars['Int']>;
  innOuts?: Maybe<Scalars['Int']>;
  po?: Maybe<Scalars['Int']>;
  a?: Maybe<Scalars['Int']>;
  e?: Maybe<Scalars['Int']>;
  dp?: Maybe<Scalars['Int']>;
};

/**
 * A condition to be used against `LahmanFielding` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type LahmanFieldingCondition = {
  /** Checks for equality with the object’s `playerId` field. */
  playerId?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `year` field. */
  year?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `stint` field. */
  stint?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `teamId` field. */
  teamId?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `lgId` field. */
  lgId?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `pos` field. */
  pos?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `g` field. */
  g?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `gs` field. */
  gs?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `innOuts` field. */
  innOuts?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `po` field. */
  po?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `a` field. */
  a?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `e` field. */
  e?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `dp` field. */
  dp?: Maybe<Scalars['Int']>;
};

/** A filter to be used against `LahmanFielding` object types. All fields are combined with a logical ‘and.’ */
export type LahmanFieldingFilter = {
  /** Filter by the object’s `playerId` field. */
  playerId?: Maybe<StringFilter>;
  /** Filter by the object’s `year` field. */
  year?: Maybe<IntFilter>;
  /** Filter by the object’s `stint` field. */
  stint?: Maybe<IntFilter>;
  /** Filter by the object’s `teamId` field. */
  teamId?: Maybe<StringFilter>;
  /** Filter by the object’s `lgId` field. */
  lgId?: Maybe<StringFilter>;
  /** Filter by the object’s `pos` field. */
  pos?: Maybe<StringFilter>;
  /** Filter by the object’s `g` field. */
  g?: Maybe<IntFilter>;
  /** Filter by the object’s `gs` field. */
  gs?: Maybe<IntFilter>;
  /** Filter by the object’s `innOuts` field. */
  innOuts?: Maybe<IntFilter>;
  /** Filter by the object’s `po` field. */
  po?: Maybe<IntFilter>;
  /** Filter by the object’s `a` field. */
  a?: Maybe<IntFilter>;
  /** Filter by the object’s `e` field. */
  e?: Maybe<IntFilter>;
  /** Filter by the object’s `dp` field. */
  dp?: Maybe<IntFilter>;
  /** Checks for all expressions in this list. */
  and?: Maybe<Array<LahmanFieldingFilter>>;
  /** Checks for any expressions in this list. */
  or?: Maybe<Array<LahmanFieldingFilter>>;
  /** Negates the expression. */
  not?: Maybe<LahmanFieldingFilter>;
};

/** An input for mutations affecting `LahmanFielding` */
export type LahmanFieldingInput = {
  playerId: Scalars['String'];
  year: Scalars['Int'];
  stint: Scalars['Int'];
  teamId?: Maybe<Scalars['String']>;
  lgId?: Maybe<Scalars['String']>;
  pos: Scalars['String'];
  g?: Maybe<Scalars['Int']>;
  gs?: Maybe<Scalars['Int']>;
  innOuts?: Maybe<Scalars['Int']>;
  po?: Maybe<Scalars['Int']>;
  a?: Maybe<Scalars['Int']>;
  e?: Maybe<Scalars['Int']>;
  dp?: Maybe<Scalars['Int']>;
};

/** Represents an update to a `LahmanFielding`. Fields that are set will be updated. */
export type LahmanFieldingPatch = {
  playerId?: Maybe<Scalars['String']>;
  year?: Maybe<Scalars['Int']>;
  stint?: Maybe<Scalars['Int']>;
  teamId?: Maybe<Scalars['String']>;
  lgId?: Maybe<Scalars['String']>;
  pos?: Maybe<Scalars['String']>;
  g?: Maybe<Scalars['Int']>;
  gs?: Maybe<Scalars['Int']>;
  innOuts?: Maybe<Scalars['Int']>;
  po?: Maybe<Scalars['Int']>;
  a?: Maybe<Scalars['Int']>;
  e?: Maybe<Scalars['Int']>;
  dp?: Maybe<Scalars['Int']>;
};

export type LahmanFieldingpost = Node & {
  __typename?: 'LahmanFieldingpost';
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  playerId: Scalars['String'];
  year: Scalars['Int'];
  teamId?: Maybe<Scalars['String']>;
  lgId?: Maybe<Scalars['String']>;
  round: Scalars['String'];
  pos: Scalars['String'];
  g?: Maybe<Scalars['Int']>;
  gs?: Maybe<Scalars['Int']>;
  innOuts?: Maybe<Scalars['Int']>;
  po?: Maybe<Scalars['Int']>;
  a?: Maybe<Scalars['Int']>;
  e?: Maybe<Scalars['Int']>;
  dp?: Maybe<Scalars['Int']>;
  tp?: Maybe<Scalars['Int']>;
  pb?: Maybe<Scalars['Int']>;
  sb?: Maybe<Scalars['Float']>;
  cs?: Maybe<Scalars['Float']>;
};

/**
 * A condition to be used against `LahmanFieldingpost` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type LahmanFieldingpostCondition = {
  /** Checks for equality with the object’s `playerId` field. */
  playerId?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `year` field. */
  year?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `teamId` field. */
  teamId?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `lgId` field. */
  lgId?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `round` field. */
  round?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `pos` field. */
  pos?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `g` field. */
  g?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `gs` field. */
  gs?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `innOuts` field. */
  innOuts?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `po` field. */
  po?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `a` field. */
  a?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `e` field. */
  e?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `dp` field. */
  dp?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `tp` field. */
  tp?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `pb` field. */
  pb?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `sb` field. */
  sb?: Maybe<Scalars['Float']>;
  /** Checks for equality with the object’s `cs` field. */
  cs?: Maybe<Scalars['Float']>;
};

/** A filter to be used against `LahmanFieldingpost` object types. All fields are combined with a logical ‘and.’ */
export type LahmanFieldingpostFilter = {
  /** Filter by the object’s `playerId` field. */
  playerId?: Maybe<StringFilter>;
  /** Filter by the object’s `year` field. */
  year?: Maybe<IntFilter>;
  /** Filter by the object’s `teamId` field. */
  teamId?: Maybe<StringFilter>;
  /** Filter by the object’s `lgId` field. */
  lgId?: Maybe<StringFilter>;
  /** Filter by the object’s `round` field. */
  round?: Maybe<StringFilter>;
  /** Filter by the object’s `pos` field. */
  pos?: Maybe<StringFilter>;
  /** Filter by the object’s `g` field. */
  g?: Maybe<IntFilter>;
  /** Filter by the object’s `gs` field. */
  gs?: Maybe<IntFilter>;
  /** Filter by the object’s `innOuts` field. */
  innOuts?: Maybe<IntFilter>;
  /** Filter by the object’s `po` field. */
  po?: Maybe<IntFilter>;
  /** Filter by the object’s `a` field. */
  a?: Maybe<IntFilter>;
  /** Filter by the object’s `e` field. */
  e?: Maybe<IntFilter>;
  /** Filter by the object’s `dp` field. */
  dp?: Maybe<IntFilter>;
  /** Filter by the object’s `tp` field. */
  tp?: Maybe<IntFilter>;
  /** Filter by the object’s `pb` field. */
  pb?: Maybe<IntFilter>;
  /** Filter by the object’s `sb` field. */
  sb?: Maybe<FloatFilter>;
  /** Filter by the object’s `cs` field. */
  cs?: Maybe<FloatFilter>;
  /** Checks for all expressions in this list. */
  and?: Maybe<Array<LahmanFieldingpostFilter>>;
  /** Checks for any expressions in this list. */
  or?: Maybe<Array<LahmanFieldingpostFilter>>;
  /** Negates the expression. */
  not?: Maybe<LahmanFieldingpostFilter>;
};

/** An input for mutations affecting `LahmanFieldingpost` */
export type LahmanFieldingpostInput = {
  playerId: Scalars['String'];
  year: Scalars['Int'];
  teamId?: Maybe<Scalars['String']>;
  lgId?: Maybe<Scalars['String']>;
  round: Scalars['String'];
  pos: Scalars['String'];
  g?: Maybe<Scalars['Int']>;
  gs?: Maybe<Scalars['Int']>;
  innOuts?: Maybe<Scalars['Int']>;
  po?: Maybe<Scalars['Int']>;
  a?: Maybe<Scalars['Int']>;
  e?: Maybe<Scalars['Int']>;
  dp?: Maybe<Scalars['Int']>;
  tp?: Maybe<Scalars['Int']>;
  pb?: Maybe<Scalars['Int']>;
  sb?: Maybe<Scalars['Float']>;
  cs?: Maybe<Scalars['Float']>;
};

/** Represents an update to a `LahmanFieldingpost`. Fields that are set will be updated. */
export type LahmanFieldingpostPatch = {
  playerId?: Maybe<Scalars['String']>;
  year?: Maybe<Scalars['Int']>;
  teamId?: Maybe<Scalars['String']>;
  lgId?: Maybe<Scalars['String']>;
  round?: Maybe<Scalars['String']>;
  pos?: Maybe<Scalars['String']>;
  g?: Maybe<Scalars['Int']>;
  gs?: Maybe<Scalars['Int']>;
  innOuts?: Maybe<Scalars['Int']>;
  po?: Maybe<Scalars['Int']>;
  a?: Maybe<Scalars['Int']>;
  e?: Maybe<Scalars['Int']>;
  dp?: Maybe<Scalars['Int']>;
  tp?: Maybe<Scalars['Int']>;
  pb?: Maybe<Scalars['Int']>;
  sb?: Maybe<Scalars['Float']>;
  cs?: Maybe<Scalars['Float']>;
};

/** A connection to a list of `LahmanFieldingpost` values. */
export type LahmanFieldingpostsConnection = {
  __typename?: 'LahmanFieldingpostsConnection';
  /** A list of `LahmanFieldingpost` objects. */
  nodes: Array<Maybe<LahmanFieldingpost>>;
  /** A list of edges which contains the `LahmanFieldingpost` and cursor to aid in pagination. */
  edges: Array<LahmanFieldingpostsEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `LahmanFieldingpost` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `LahmanFieldingpost` edge in the connection. */
export type LahmanFieldingpostsEdge = {
  __typename?: 'LahmanFieldingpostsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `LahmanFieldingpost` at the end of the edge. */
  node?: Maybe<LahmanFieldingpost>;
};

/** Methods to use when ordering `LahmanFieldingpost`. */
export enum LahmanFieldingpostsOrderBy {
  Natural = 'NATURAL',
  PlayerIdAsc = 'PLAYER_ID_ASC',
  PlayerIdDesc = 'PLAYER_ID_DESC',
  YearAsc = 'YEAR_ASC',
  YearDesc = 'YEAR_DESC',
  TeamIdAsc = 'TEAM_ID_ASC',
  TeamIdDesc = 'TEAM_ID_DESC',
  LgIdAsc = 'LG_ID_ASC',
  LgIdDesc = 'LG_ID_DESC',
  RoundAsc = 'ROUND_ASC',
  RoundDesc = 'ROUND_DESC',
  PosAsc = 'POS_ASC',
  PosDesc = 'POS_DESC',
  GAsc = 'G_ASC',
  GDesc = 'G_DESC',
  GsAsc = 'GS_ASC',
  GsDesc = 'GS_DESC',
  InnOutsAsc = 'INN_OUTS_ASC',
  InnOutsDesc = 'INN_OUTS_DESC',
  PoAsc = 'PO_ASC',
  PoDesc = 'PO_DESC',
  AAsc = 'A_ASC',
  ADesc = 'A_DESC',
  EAsc = 'E_ASC',
  EDesc = 'E_DESC',
  DpAsc = 'DP_ASC',
  DpDesc = 'DP_DESC',
  TpAsc = 'TP_ASC',
  TpDesc = 'TP_DESC',
  PbAsc = 'PB_ASC',
  PbDesc = 'PB_DESC',
  SbAsc = 'SB_ASC',
  SbDesc = 'SB_DESC',
  CsAsc = 'CS_ASC',
  CsDesc = 'CS_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

/** A connection to a list of `LahmanFielding` values. */
export type LahmanFieldingsConnection = {
  __typename?: 'LahmanFieldingsConnection';
  /** A list of `LahmanFielding` objects. */
  nodes: Array<Maybe<LahmanFielding>>;
  /** A list of edges which contains the `LahmanFielding` and cursor to aid in pagination. */
  edges: Array<LahmanFieldingsEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `LahmanFielding` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `LahmanFielding` edge in the connection. */
export type LahmanFieldingsEdge = {
  __typename?: 'LahmanFieldingsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `LahmanFielding` at the end of the edge. */
  node?: Maybe<LahmanFielding>;
};

/** Methods to use when ordering `LahmanFielding`. */
export enum LahmanFieldingsOrderBy {
  Natural = 'NATURAL',
  PlayerIdAsc = 'PLAYER_ID_ASC',
  PlayerIdDesc = 'PLAYER_ID_DESC',
  YearAsc = 'YEAR_ASC',
  YearDesc = 'YEAR_DESC',
  StintAsc = 'STINT_ASC',
  StintDesc = 'STINT_DESC',
  TeamIdAsc = 'TEAM_ID_ASC',
  TeamIdDesc = 'TEAM_ID_DESC',
  LgIdAsc = 'LG_ID_ASC',
  LgIdDesc = 'LG_ID_DESC',
  PosAsc = 'POS_ASC',
  PosDesc = 'POS_DESC',
  GAsc = 'G_ASC',
  GDesc = 'G_DESC',
  GsAsc = 'GS_ASC',
  GsDesc = 'GS_DESC',
  InnOutsAsc = 'INN_OUTS_ASC',
  InnOutsDesc = 'INN_OUTS_DESC',
  PoAsc = 'PO_ASC',
  PoDesc = 'PO_DESC',
  AAsc = 'A_ASC',
  ADesc = 'A_DESC',
  EAsc = 'E_ASC',
  EDesc = 'E_DESC',
  DpAsc = 'DP_ASC',
  DpDesc = 'DP_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

export type LahmanPark = Node & {
  __typename?: 'LahmanPark';
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  parkKey: Scalars['String'];
  parkName?: Maybe<Scalars['String']>;
  parkAlias?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
};

/**
 * A condition to be used against `LahmanPark` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type LahmanParkCondition = {
  /** Checks for equality with the object’s `parkKey` field. */
  parkKey?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `parkName` field. */
  parkName?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `parkAlias` field. */
  parkAlias?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `city` field. */
  city?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `state` field. */
  state?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `country` field. */
  country?: Maybe<Scalars['String']>;
};

/** A filter to be used against `LahmanPark` object types. All fields are combined with a logical ‘and.’ */
export type LahmanParkFilter = {
  /** Filter by the object’s `parkKey` field. */
  parkKey?: Maybe<StringFilter>;
  /** Filter by the object’s `parkName` field. */
  parkName?: Maybe<StringFilter>;
  /** Filter by the object’s `parkAlias` field. */
  parkAlias?: Maybe<StringFilter>;
  /** Filter by the object’s `city` field. */
  city?: Maybe<StringFilter>;
  /** Filter by the object’s `state` field. */
  state?: Maybe<StringFilter>;
  /** Filter by the object’s `country` field. */
  country?: Maybe<StringFilter>;
  /** Checks for all expressions in this list. */
  and?: Maybe<Array<LahmanParkFilter>>;
  /** Checks for any expressions in this list. */
  or?: Maybe<Array<LahmanParkFilter>>;
  /** Negates the expression. */
  not?: Maybe<LahmanParkFilter>;
};

/** An input for mutations affecting `LahmanPark` */
export type LahmanParkInput = {
  parkKey: Scalars['String'];
  parkName?: Maybe<Scalars['String']>;
  parkAlias?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
};

/** Represents an update to a `LahmanPark`. Fields that are set will be updated. */
export type LahmanParkPatch = {
  parkKey?: Maybe<Scalars['String']>;
  parkName?: Maybe<Scalars['String']>;
  parkAlias?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
};

/** A connection to a list of `LahmanPark` values. */
export type LahmanParksConnection = {
  __typename?: 'LahmanParksConnection';
  /** A list of `LahmanPark` objects. */
  nodes: Array<Maybe<LahmanPark>>;
  /** A list of edges which contains the `LahmanPark` and cursor to aid in pagination. */
  edges: Array<LahmanParksEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `LahmanPark` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `LahmanPark` edge in the connection. */
export type LahmanParksEdge = {
  __typename?: 'LahmanParksEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `LahmanPark` at the end of the edge. */
  node?: Maybe<LahmanPark>;
};

/** Methods to use when ordering `LahmanPark`. */
export enum LahmanParksOrderBy {
  Natural = 'NATURAL',
  ParkKeyAsc = 'PARK_KEY_ASC',
  ParkKeyDesc = 'PARK_KEY_DESC',
  ParkNameAsc = 'PARK_NAME_ASC',
  ParkNameDesc = 'PARK_NAME_DESC',
  ParkAliasAsc = 'PARK_ALIAS_ASC',
  ParkAliasDesc = 'PARK_ALIAS_DESC',
  CityAsc = 'CITY_ASC',
  CityDesc = 'CITY_DESC',
  StateAsc = 'STATE_ASC',
  StateDesc = 'STATE_DESC',
  CountryAsc = 'COUNTRY_ASC',
  CountryDesc = 'COUNTRY_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

/** A connection to a list of `LahmanPerson` values. */
export type LahmanPeopleConnection = {
  __typename?: 'LahmanPeopleConnection';
  /** A list of `LahmanPerson` objects. */
  nodes: Array<Maybe<LahmanPerson>>;
  /** A list of edges which contains the `LahmanPerson` and cursor to aid in pagination. */
  edges: Array<LahmanPeopleEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `LahmanPerson` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `LahmanPerson` edge in the connection. */
export type LahmanPeopleEdge = {
  __typename?: 'LahmanPeopleEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `LahmanPerson` at the end of the edge. */
  node?: Maybe<LahmanPerson>;
};

/** Methods to use when ordering `LahmanPerson`. */
export enum LahmanPeopleOrderBy {
  Natural = 'NATURAL',
  PlayerIdAsc = 'PLAYER_ID_ASC',
  PlayerIdDesc = 'PLAYER_ID_DESC',
  BirthCountryAsc = 'BIRTH_COUNTRY_ASC',
  BirthCountryDesc = 'BIRTH_COUNTRY_DESC',
  BirthStateAsc = 'BIRTH_STATE_ASC',
  BirthStateDesc = 'BIRTH_STATE_DESC',
  BirthCityAsc = 'BIRTH_CITY_ASC',
  BirthCityDesc = 'BIRTH_CITY_DESC',
  DeathCountryAsc = 'DEATH_COUNTRY_ASC',
  DeathCountryDesc = 'DEATH_COUNTRY_DESC',
  DeathStateAsc = 'DEATH_STATE_ASC',
  DeathStateDesc = 'DEATH_STATE_DESC',
  DeathCityAsc = 'DEATH_CITY_ASC',
  DeathCityDesc = 'DEATH_CITY_DESC',
  NameFirstAsc = 'NAME_FIRST_ASC',
  NameFirstDesc = 'NAME_FIRST_DESC',
  NameLastAsc = 'NAME_LAST_ASC',
  NameLastDesc = 'NAME_LAST_DESC',
  NameGivenAsc = 'NAME_GIVEN_ASC',
  NameGivenDesc = 'NAME_GIVEN_DESC',
  WeightAsc = 'WEIGHT_ASC',
  WeightDesc = 'WEIGHT_DESC',
  HeightAsc = 'HEIGHT_ASC',
  HeightDesc = 'HEIGHT_DESC',
  BatsAsc = 'BATS_ASC',
  BatsDesc = 'BATS_DESC',
  ThrowsAsc = 'THROWS_ASC',
  ThrowsDesc = 'THROWS_DESC',
  DebutAsc = 'DEBUT_ASC',
  DebutDesc = 'DEBUT_DESC',
  FinalGameAsc = 'FINAL_GAME_ASC',
  FinalGameDesc = 'FINAL_GAME_DESC',
  RetroIdAsc = 'RETRO_ID_ASC',
  RetroIdDesc = 'RETRO_ID_DESC',
  BbRefIdAsc = 'BB_REF_ID_ASC',
  BbRefIdDesc = 'BB_REF_ID_DESC',
  BirthDateAsc = 'BIRTH_DATE_ASC',
  BirthDateDesc = 'BIRTH_DATE_DESC',
  DeathDateAsc = 'DEATH_DATE_ASC',
  DeathDateDesc = 'DEATH_DATE_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

export type LahmanPerson = Node & {
  __typename?: 'LahmanPerson';
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  playerId: Scalars['String'];
  birthCountry?: Maybe<Scalars['String']>;
  birthState?: Maybe<Scalars['String']>;
  birthCity?: Maybe<Scalars['String']>;
  deathCountry?: Maybe<Scalars['String']>;
  deathState?: Maybe<Scalars['String']>;
  deathCity?: Maybe<Scalars['String']>;
  nameFirst?: Maybe<Scalars['String']>;
  nameLast?: Maybe<Scalars['String']>;
  nameGiven?: Maybe<Scalars['String']>;
  weight?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  bats?: Maybe<Scalars['String']>;
  throws?: Maybe<Scalars['String']>;
  debut?: Maybe<Scalars['Datetime']>;
  finalGame?: Maybe<Scalars['Datetime']>;
  retroId?: Maybe<Scalars['String']>;
  bbRefId?: Maybe<Scalars['String']>;
  birthDate?: Maybe<Scalars['Datetime']>;
  deathDate?: Maybe<Scalars['Datetime']>;
  /** Reads and enables pagination through a set of `LahmanBatting`. */
  lahmanBattingsByPlayerId: LahmanBattingsConnection;
  /** Reads and enables pagination through a set of `LahmanPitching`. */
  lahmanPitchingsByPlayerId: LahmanPitchingsConnection;
  /** Reads and enables pagination through a set of `LahmanPitchingpost`. */
  lahmanPitchingpostsByPlayerId: LahmanPitchingpostsConnection;
  /** Reads and enables pagination through a set of `LahmanSalary`. */
  lahmanSalariesByPlayerId: LahmanSalariesConnection;
  /** Reads and enables pagination through a set of `RetroBatting`. */
  retroBattingsByPlayerId: RetroBattingsConnection;
  /** Reads and enables pagination through a set of `RetroPitching`. */
  retroPitchingsByPlayerId: RetroPitchingsConnection;
  /** Reads and enables pagination through a set of `RetroFielding`. */
  retroFieldingsByPlayerId: RetroFieldingsConnection;
  /** Reads and enables pagination through a set of `RetroGame`. */
  retroGamesByWinPitId: RetroGamesConnection;
  /** Reads and enables pagination through a set of `RetroGame`. */
  retroGamesByLosePitId: RetroGamesConnection;
  /** Reads and enables pagination through a set of `RetroGame`. */
  retroGamesBySavePitId: RetroGamesConnection;
  /** Reads and enables pagination through a set of `RetroGame`. */
  retroGamesByGwrbiBatId: RetroGamesConnection;
  /** Reads and enables pagination through a set of `RetroEvent`. */
  retroEventsByBatId: RetroEventsConnection;
  /** Reads and enables pagination through a set of `RetroEvent`. */
  retroEventsByPitId: RetroEventsConnection;
};


export type LahmanPersonLahmanBattingsByPlayerIdArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<LahmanBattingsOrderBy>>;
  condition?: Maybe<LahmanBattingCondition>;
  filter?: Maybe<LahmanBattingFilter>;
};


export type LahmanPersonLahmanPitchingsByPlayerIdArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<LahmanPitchingsOrderBy>>;
  condition?: Maybe<LahmanPitchingCondition>;
  filter?: Maybe<LahmanPitchingFilter>;
};


export type LahmanPersonLahmanPitchingpostsByPlayerIdArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<LahmanPitchingpostsOrderBy>>;
  condition?: Maybe<LahmanPitchingpostCondition>;
  filter?: Maybe<LahmanPitchingpostFilter>;
};


export type LahmanPersonLahmanSalariesByPlayerIdArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<LahmanSalariesOrderBy>>;
  condition?: Maybe<LahmanSalaryCondition>;
  filter?: Maybe<LahmanSalaryFilter>;
};


export type LahmanPersonRetroBattingsByPlayerIdArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<RetroBattingsOrderBy>>;
  condition?: Maybe<RetroBattingCondition>;
  filter?: Maybe<RetroBattingFilter>;
};


export type LahmanPersonRetroPitchingsByPlayerIdArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<RetroPitchingsOrderBy>>;
  condition?: Maybe<RetroPitchingCondition>;
  filter?: Maybe<RetroPitchingFilter>;
};


export type LahmanPersonRetroFieldingsByPlayerIdArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<RetroFieldingsOrderBy>>;
  condition?: Maybe<RetroFieldingCondition>;
  filter?: Maybe<RetroFieldingFilter>;
};


export type LahmanPersonRetroGamesByWinPitIdArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<RetroGamesOrderBy>>;
  condition?: Maybe<RetroGameCondition>;
  filter?: Maybe<RetroGameFilter>;
};


export type LahmanPersonRetroGamesByLosePitIdArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<RetroGamesOrderBy>>;
  condition?: Maybe<RetroGameCondition>;
  filter?: Maybe<RetroGameFilter>;
};


export type LahmanPersonRetroGamesBySavePitIdArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<RetroGamesOrderBy>>;
  condition?: Maybe<RetroGameCondition>;
  filter?: Maybe<RetroGameFilter>;
};


export type LahmanPersonRetroGamesByGwrbiBatIdArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<RetroGamesOrderBy>>;
  condition?: Maybe<RetroGameCondition>;
  filter?: Maybe<RetroGameFilter>;
};


export type LahmanPersonRetroEventsByBatIdArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<RetroEventsOrderBy>>;
  condition?: Maybe<RetroEventCondition>;
  filter?: Maybe<RetroEventFilter>;
};


export type LahmanPersonRetroEventsByPitIdArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<RetroEventsOrderBy>>;
  condition?: Maybe<RetroEventCondition>;
  filter?: Maybe<RetroEventFilter>;
};

/**
 * A condition to be used against `LahmanPerson` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type LahmanPersonCondition = {
  /** Checks for equality with the object’s `playerId` field. */
  playerId?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `birthCountry` field. */
  birthCountry?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `birthState` field. */
  birthState?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `birthCity` field. */
  birthCity?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `deathCountry` field. */
  deathCountry?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `deathState` field. */
  deathState?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `deathCity` field. */
  deathCity?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `nameFirst` field. */
  nameFirst?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `nameLast` field. */
  nameLast?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `nameGiven` field. */
  nameGiven?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `weight` field. */
  weight?: Maybe<Scalars['Float']>;
  /** Checks for equality with the object’s `height` field. */
  height?: Maybe<Scalars['Float']>;
  /** Checks for equality with the object’s `bats` field. */
  bats?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `throws` field. */
  throws?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `debut` field. */
  debut?: Maybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `finalGame` field. */
  finalGame?: Maybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `retroId` field. */
  retroId?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `bbRefId` field. */
  bbRefId?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `birthDate` field. */
  birthDate?: Maybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `deathDate` field. */
  deathDate?: Maybe<Scalars['Datetime']>;
};

/** A filter to be used against `LahmanPerson` object types. All fields are combined with a logical ‘and.’ */
export type LahmanPersonFilter = {
  /** Filter by the object’s `playerId` field. */
  playerId?: Maybe<StringFilter>;
  /** Filter by the object’s `birthCountry` field. */
  birthCountry?: Maybe<StringFilter>;
  /** Filter by the object’s `birthState` field. */
  birthState?: Maybe<StringFilter>;
  /** Filter by the object’s `birthCity` field. */
  birthCity?: Maybe<StringFilter>;
  /** Filter by the object’s `deathCountry` field. */
  deathCountry?: Maybe<StringFilter>;
  /** Filter by the object’s `deathState` field. */
  deathState?: Maybe<StringFilter>;
  /** Filter by the object’s `deathCity` field. */
  deathCity?: Maybe<StringFilter>;
  /** Filter by the object’s `nameFirst` field. */
  nameFirst?: Maybe<StringFilter>;
  /** Filter by the object’s `nameLast` field. */
  nameLast?: Maybe<StringFilter>;
  /** Filter by the object’s `nameGiven` field. */
  nameGiven?: Maybe<StringFilter>;
  /** Filter by the object’s `weight` field. */
  weight?: Maybe<FloatFilter>;
  /** Filter by the object’s `height` field. */
  height?: Maybe<FloatFilter>;
  /** Filter by the object’s `bats` field. */
  bats?: Maybe<StringFilter>;
  /** Filter by the object’s `throws` field. */
  throws?: Maybe<StringFilter>;
  /** Filter by the object’s `debut` field. */
  debut?: Maybe<DatetimeFilter>;
  /** Filter by the object’s `finalGame` field. */
  finalGame?: Maybe<DatetimeFilter>;
  /** Filter by the object’s `retroId` field. */
  retroId?: Maybe<StringFilter>;
  /** Filter by the object’s `bbRefId` field. */
  bbRefId?: Maybe<StringFilter>;
  /** Filter by the object’s `birthDate` field. */
  birthDate?: Maybe<DatetimeFilter>;
  /** Filter by the object’s `deathDate` field. */
  deathDate?: Maybe<DatetimeFilter>;
  /** Checks for all expressions in this list. */
  and?: Maybe<Array<LahmanPersonFilter>>;
  /** Checks for any expressions in this list. */
  or?: Maybe<Array<LahmanPersonFilter>>;
  /** Negates the expression. */
  not?: Maybe<LahmanPersonFilter>;
};

/** An input for mutations affecting `LahmanPerson` */
export type LahmanPersonInput = {
  playerId: Scalars['String'];
  birthCountry?: Maybe<Scalars['String']>;
  birthState?: Maybe<Scalars['String']>;
  birthCity?: Maybe<Scalars['String']>;
  deathCountry?: Maybe<Scalars['String']>;
  deathState?: Maybe<Scalars['String']>;
  deathCity?: Maybe<Scalars['String']>;
  nameFirst?: Maybe<Scalars['String']>;
  nameLast?: Maybe<Scalars['String']>;
  nameGiven?: Maybe<Scalars['String']>;
  weight?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  bats?: Maybe<Scalars['String']>;
  throws?: Maybe<Scalars['String']>;
  debut?: Maybe<Scalars['Datetime']>;
  finalGame?: Maybe<Scalars['Datetime']>;
  retroId?: Maybe<Scalars['String']>;
  bbRefId?: Maybe<Scalars['String']>;
  birthDate?: Maybe<Scalars['Datetime']>;
  deathDate?: Maybe<Scalars['Datetime']>;
};

/** Represents an update to a `LahmanPerson`. Fields that are set will be updated. */
export type LahmanPersonPatch = {
  playerId?: Maybe<Scalars['String']>;
  birthCountry?: Maybe<Scalars['String']>;
  birthState?: Maybe<Scalars['String']>;
  birthCity?: Maybe<Scalars['String']>;
  deathCountry?: Maybe<Scalars['String']>;
  deathState?: Maybe<Scalars['String']>;
  deathCity?: Maybe<Scalars['String']>;
  nameFirst?: Maybe<Scalars['String']>;
  nameLast?: Maybe<Scalars['String']>;
  nameGiven?: Maybe<Scalars['String']>;
  weight?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  bats?: Maybe<Scalars['String']>;
  throws?: Maybe<Scalars['String']>;
  debut?: Maybe<Scalars['Datetime']>;
  finalGame?: Maybe<Scalars['Datetime']>;
  retroId?: Maybe<Scalars['String']>;
  bbRefId?: Maybe<Scalars['String']>;
  birthDate?: Maybe<Scalars['Datetime']>;
  deathDate?: Maybe<Scalars['Datetime']>;
};

export type LahmanPitching = Node & {
  __typename?: 'LahmanPitching';
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  playerId: Scalars['String'];
  year: Scalars['Int'];
  stint: Scalars['Int'];
  teamId?: Maybe<Scalars['String']>;
  lgId?: Maybe<Scalars['String']>;
  w?: Maybe<Scalars['Int']>;
  l?: Maybe<Scalars['Int']>;
  g?: Maybe<Scalars['Int']>;
  gs?: Maybe<Scalars['Int']>;
  cg?: Maybe<Scalars['Int']>;
  sho?: Maybe<Scalars['Int']>;
  sv?: Maybe<Scalars['Int']>;
  ipOuts?: Maybe<Scalars['Int']>;
  h?: Maybe<Scalars['Int']>;
  er?: Maybe<Scalars['Int']>;
  hr?: Maybe<Scalars['Int']>;
  bb?: Maybe<Scalars['Int']>;
  so?: Maybe<Scalars['Int']>;
  baOpp?: Maybe<Scalars['Float']>;
  era?: Maybe<Scalars['Float']>;
  ibb?: Maybe<Scalars['Int']>;
  wp?: Maybe<Scalars['Int']>;
  hbp?: Maybe<Scalars['Int']>;
  bk?: Maybe<Scalars['Int']>;
  bfp?: Maybe<Scalars['Int']>;
  gf?: Maybe<Scalars['Int']>;
  r?: Maybe<Scalars['Int']>;
  sh?: Maybe<Scalars['Int']>;
  sf?: Maybe<Scalars['Int']>;
  gidp?: Maybe<Scalars['Int']>;
  whip?: Maybe<Scalars['Float']>;
  h9?: Maybe<Scalars['Float']>;
  hr9?: Maybe<Scalars['Float']>;
  k9?: Maybe<Scalars['Float']>;
  bb9?: Maybe<Scalars['Float']>;
  sow?: Maybe<Scalars['Float']>;
  /** Reads a single `LahmanPerson` that is related to this `LahmanPitching`. */
  lahmanPersonByPlayerId?: Maybe<LahmanPerson>;
};

/**
 * A condition to be used against `LahmanPitching` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type LahmanPitchingCondition = {
  /** Checks for equality with the object’s `playerId` field. */
  playerId?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `year` field. */
  year?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `stint` field. */
  stint?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `teamId` field. */
  teamId?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `lgId` field. */
  lgId?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `w` field. */
  w?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `l` field. */
  l?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `g` field. */
  g?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `gs` field. */
  gs?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `cg` field. */
  cg?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `sho` field. */
  sho?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `sv` field. */
  sv?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `ipOuts` field. */
  ipOuts?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `h` field. */
  h?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `er` field. */
  er?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `hr` field. */
  hr?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `bb` field. */
  bb?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `so` field. */
  so?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `baOpp` field. */
  baOpp?: Maybe<Scalars['Float']>;
  /** Checks for equality with the object’s `era` field. */
  era?: Maybe<Scalars['Float']>;
  /** Checks for equality with the object’s `ibb` field. */
  ibb?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `wp` field. */
  wp?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `hbp` field. */
  hbp?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `bk` field. */
  bk?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `bfp` field. */
  bfp?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `gf` field. */
  gf?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `r` field. */
  r?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `sh` field. */
  sh?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `sf` field. */
  sf?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `gidp` field. */
  gidp?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `whip` field. */
  whip?: Maybe<Scalars['Float']>;
  /** Checks for equality with the object’s `h9` field. */
  h9?: Maybe<Scalars['Float']>;
  /** Checks for equality with the object’s `hr9` field. */
  hr9?: Maybe<Scalars['Float']>;
  /** Checks for equality with the object’s `k9` field. */
  k9?: Maybe<Scalars['Float']>;
  /** Checks for equality with the object’s `bb9` field. */
  bb9?: Maybe<Scalars['Float']>;
  /** Checks for equality with the object’s `sow` field. */
  sow?: Maybe<Scalars['Float']>;
};

/** A filter to be used against `LahmanPitching` object types. All fields are combined with a logical ‘and.’ */
export type LahmanPitchingFilter = {
  /** Filter by the object’s `playerId` field. */
  playerId?: Maybe<StringFilter>;
  /** Filter by the object’s `year` field. */
  year?: Maybe<IntFilter>;
  /** Filter by the object’s `stint` field. */
  stint?: Maybe<IntFilter>;
  /** Filter by the object’s `teamId` field. */
  teamId?: Maybe<StringFilter>;
  /** Filter by the object’s `lgId` field. */
  lgId?: Maybe<StringFilter>;
  /** Filter by the object’s `w` field. */
  w?: Maybe<IntFilter>;
  /** Filter by the object’s `l` field. */
  l?: Maybe<IntFilter>;
  /** Filter by the object’s `g` field. */
  g?: Maybe<IntFilter>;
  /** Filter by the object’s `gs` field. */
  gs?: Maybe<IntFilter>;
  /** Filter by the object’s `cg` field. */
  cg?: Maybe<IntFilter>;
  /** Filter by the object’s `sho` field. */
  sho?: Maybe<IntFilter>;
  /** Filter by the object’s `sv` field. */
  sv?: Maybe<IntFilter>;
  /** Filter by the object’s `ipOuts` field. */
  ipOuts?: Maybe<IntFilter>;
  /** Filter by the object’s `h` field. */
  h?: Maybe<IntFilter>;
  /** Filter by the object’s `er` field. */
  er?: Maybe<IntFilter>;
  /** Filter by the object’s `hr` field. */
  hr?: Maybe<IntFilter>;
  /** Filter by the object’s `bb` field. */
  bb?: Maybe<IntFilter>;
  /** Filter by the object’s `so` field. */
  so?: Maybe<IntFilter>;
  /** Filter by the object’s `baOpp` field. */
  baOpp?: Maybe<FloatFilter>;
  /** Filter by the object’s `era` field. */
  era?: Maybe<FloatFilter>;
  /** Filter by the object’s `ibb` field. */
  ibb?: Maybe<IntFilter>;
  /** Filter by the object’s `wp` field. */
  wp?: Maybe<IntFilter>;
  /** Filter by the object’s `hbp` field. */
  hbp?: Maybe<IntFilter>;
  /** Filter by the object’s `bk` field. */
  bk?: Maybe<IntFilter>;
  /** Filter by the object’s `bfp` field. */
  bfp?: Maybe<IntFilter>;
  /** Filter by the object’s `gf` field. */
  gf?: Maybe<IntFilter>;
  /** Filter by the object’s `r` field. */
  r?: Maybe<IntFilter>;
  /** Filter by the object’s `sh` field. */
  sh?: Maybe<IntFilter>;
  /** Filter by the object’s `sf` field. */
  sf?: Maybe<IntFilter>;
  /** Filter by the object’s `gidp` field. */
  gidp?: Maybe<IntFilter>;
  /** Filter by the object’s `whip` field. */
  whip?: Maybe<FloatFilter>;
  /** Filter by the object’s `h9` field. */
  h9?: Maybe<FloatFilter>;
  /** Filter by the object’s `hr9` field. */
  hr9?: Maybe<FloatFilter>;
  /** Filter by the object’s `k9` field. */
  k9?: Maybe<FloatFilter>;
  /** Filter by the object’s `bb9` field. */
  bb9?: Maybe<FloatFilter>;
  /** Filter by the object’s `sow` field. */
  sow?: Maybe<FloatFilter>;
  /** Checks for all expressions in this list. */
  and?: Maybe<Array<LahmanPitchingFilter>>;
  /** Checks for any expressions in this list. */
  or?: Maybe<Array<LahmanPitchingFilter>>;
  /** Negates the expression. */
  not?: Maybe<LahmanPitchingFilter>;
};

/** An input for mutations affecting `LahmanPitching` */
export type LahmanPitchingInput = {
  playerId: Scalars['String'];
  year: Scalars['Int'];
  stint: Scalars['Int'];
  teamId?: Maybe<Scalars['String']>;
  lgId?: Maybe<Scalars['String']>;
  w?: Maybe<Scalars['Int']>;
  l?: Maybe<Scalars['Int']>;
  g?: Maybe<Scalars['Int']>;
  gs?: Maybe<Scalars['Int']>;
  cg?: Maybe<Scalars['Int']>;
  sho?: Maybe<Scalars['Int']>;
  sv?: Maybe<Scalars['Int']>;
  ipOuts?: Maybe<Scalars['Int']>;
  h?: Maybe<Scalars['Int']>;
  er?: Maybe<Scalars['Int']>;
  hr?: Maybe<Scalars['Int']>;
  bb?: Maybe<Scalars['Int']>;
  so?: Maybe<Scalars['Int']>;
  baOpp?: Maybe<Scalars['Float']>;
  era?: Maybe<Scalars['Float']>;
  ibb?: Maybe<Scalars['Int']>;
  wp?: Maybe<Scalars['Int']>;
  hbp?: Maybe<Scalars['Int']>;
  bk?: Maybe<Scalars['Int']>;
  bfp?: Maybe<Scalars['Int']>;
  gf?: Maybe<Scalars['Int']>;
  r?: Maybe<Scalars['Int']>;
  sh?: Maybe<Scalars['Int']>;
  sf?: Maybe<Scalars['Int']>;
  gidp?: Maybe<Scalars['Int']>;
  whip?: Maybe<Scalars['Float']>;
  h9?: Maybe<Scalars['Float']>;
  hr9?: Maybe<Scalars['Float']>;
  k9?: Maybe<Scalars['Float']>;
  bb9?: Maybe<Scalars['Float']>;
  sow?: Maybe<Scalars['Float']>;
};

/** Represents an update to a `LahmanPitching`. Fields that are set will be updated. */
export type LahmanPitchingPatch = {
  playerId?: Maybe<Scalars['String']>;
  year?: Maybe<Scalars['Int']>;
  stint?: Maybe<Scalars['Int']>;
  teamId?: Maybe<Scalars['String']>;
  lgId?: Maybe<Scalars['String']>;
  w?: Maybe<Scalars['Int']>;
  l?: Maybe<Scalars['Int']>;
  g?: Maybe<Scalars['Int']>;
  gs?: Maybe<Scalars['Int']>;
  cg?: Maybe<Scalars['Int']>;
  sho?: Maybe<Scalars['Int']>;
  sv?: Maybe<Scalars['Int']>;
  ipOuts?: Maybe<Scalars['Int']>;
  h?: Maybe<Scalars['Int']>;
  er?: Maybe<Scalars['Int']>;
  hr?: Maybe<Scalars['Int']>;
  bb?: Maybe<Scalars['Int']>;
  so?: Maybe<Scalars['Int']>;
  baOpp?: Maybe<Scalars['Float']>;
  era?: Maybe<Scalars['Float']>;
  ibb?: Maybe<Scalars['Int']>;
  wp?: Maybe<Scalars['Int']>;
  hbp?: Maybe<Scalars['Int']>;
  bk?: Maybe<Scalars['Int']>;
  bfp?: Maybe<Scalars['Int']>;
  gf?: Maybe<Scalars['Int']>;
  r?: Maybe<Scalars['Int']>;
  sh?: Maybe<Scalars['Int']>;
  sf?: Maybe<Scalars['Int']>;
  gidp?: Maybe<Scalars['Int']>;
  whip?: Maybe<Scalars['Float']>;
  h9?: Maybe<Scalars['Float']>;
  hr9?: Maybe<Scalars['Float']>;
  k9?: Maybe<Scalars['Float']>;
  bb9?: Maybe<Scalars['Float']>;
  sow?: Maybe<Scalars['Float']>;
};

export type LahmanPitchingpost = Node & {
  __typename?: 'LahmanPitchingpost';
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  playerId: Scalars['String'];
  year: Scalars['Int'];
  round: Scalars['String'];
  teamId?: Maybe<Scalars['String']>;
  lgId?: Maybe<Scalars['String']>;
  w?: Maybe<Scalars['Int']>;
  l?: Maybe<Scalars['Int']>;
  g?: Maybe<Scalars['Int']>;
  gs?: Maybe<Scalars['Int']>;
  cg?: Maybe<Scalars['Int']>;
  sho?: Maybe<Scalars['Int']>;
  sv?: Maybe<Scalars['Int']>;
  ipOuts?: Maybe<Scalars['Int']>;
  h?: Maybe<Scalars['Int']>;
  er?: Maybe<Scalars['Int']>;
  hr?: Maybe<Scalars['Int']>;
  bb?: Maybe<Scalars['Int']>;
  so?: Maybe<Scalars['Int']>;
  baOpp?: Maybe<Scalars['Float']>;
  era?: Maybe<Scalars['Float']>;
  ibb?: Maybe<Scalars['Int']>;
  wp?: Maybe<Scalars['Int']>;
  hbp?: Maybe<Scalars['Int']>;
  bk?: Maybe<Scalars['Int']>;
  bfp?: Maybe<Scalars['Int']>;
  gf?: Maybe<Scalars['Int']>;
  r?: Maybe<Scalars['Int']>;
  sh?: Maybe<Scalars['Int']>;
  sf?: Maybe<Scalars['Int']>;
  gidp?: Maybe<Scalars['Int']>;
  whip?: Maybe<Scalars['Float']>;
  h9?: Maybe<Scalars['Float']>;
  hr9?: Maybe<Scalars['Float']>;
  k9?: Maybe<Scalars['Float']>;
  bb9?: Maybe<Scalars['Float']>;
  sow?: Maybe<Scalars['Float']>;
  /** Reads a single `LahmanPerson` that is related to this `LahmanPitchingpost`. */
  lahmanPersonByPlayerId?: Maybe<LahmanPerson>;
};

/**
 * A condition to be used against `LahmanPitchingpost` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type LahmanPitchingpostCondition = {
  /** Checks for equality with the object’s `playerId` field. */
  playerId?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `year` field. */
  year?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `round` field. */
  round?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `teamId` field. */
  teamId?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `lgId` field. */
  lgId?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `w` field. */
  w?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `l` field. */
  l?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `g` field. */
  g?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `gs` field. */
  gs?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `cg` field. */
  cg?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `sho` field. */
  sho?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `sv` field. */
  sv?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `ipOuts` field. */
  ipOuts?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `h` field. */
  h?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `er` field. */
  er?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `hr` field. */
  hr?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `bb` field. */
  bb?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `so` field. */
  so?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `baOpp` field. */
  baOpp?: Maybe<Scalars['Float']>;
  /** Checks for equality with the object’s `era` field. */
  era?: Maybe<Scalars['Float']>;
  /** Checks for equality with the object’s `ibb` field. */
  ibb?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `wp` field. */
  wp?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `hbp` field. */
  hbp?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `bk` field. */
  bk?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `bfp` field. */
  bfp?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `gf` field. */
  gf?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `r` field. */
  r?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `sh` field. */
  sh?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `sf` field. */
  sf?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `gidp` field. */
  gidp?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `whip` field. */
  whip?: Maybe<Scalars['Float']>;
  /** Checks for equality with the object’s `h9` field. */
  h9?: Maybe<Scalars['Float']>;
  /** Checks for equality with the object’s `hr9` field. */
  hr9?: Maybe<Scalars['Float']>;
  /** Checks for equality with the object’s `k9` field. */
  k9?: Maybe<Scalars['Float']>;
  /** Checks for equality with the object’s `bb9` field. */
  bb9?: Maybe<Scalars['Float']>;
  /** Checks for equality with the object’s `sow` field. */
  sow?: Maybe<Scalars['Float']>;
};

/** A filter to be used against `LahmanPitchingpost` object types. All fields are combined with a logical ‘and.’ */
export type LahmanPitchingpostFilter = {
  /** Filter by the object’s `playerId` field. */
  playerId?: Maybe<StringFilter>;
  /** Filter by the object’s `year` field. */
  year?: Maybe<IntFilter>;
  /** Filter by the object’s `round` field. */
  round?: Maybe<StringFilter>;
  /** Filter by the object’s `teamId` field. */
  teamId?: Maybe<StringFilter>;
  /** Filter by the object’s `lgId` field. */
  lgId?: Maybe<StringFilter>;
  /** Filter by the object’s `w` field. */
  w?: Maybe<IntFilter>;
  /** Filter by the object’s `l` field. */
  l?: Maybe<IntFilter>;
  /** Filter by the object’s `g` field. */
  g?: Maybe<IntFilter>;
  /** Filter by the object’s `gs` field. */
  gs?: Maybe<IntFilter>;
  /** Filter by the object’s `cg` field. */
  cg?: Maybe<IntFilter>;
  /** Filter by the object’s `sho` field. */
  sho?: Maybe<IntFilter>;
  /** Filter by the object’s `sv` field. */
  sv?: Maybe<IntFilter>;
  /** Filter by the object’s `ipOuts` field. */
  ipOuts?: Maybe<IntFilter>;
  /** Filter by the object’s `h` field. */
  h?: Maybe<IntFilter>;
  /** Filter by the object’s `er` field. */
  er?: Maybe<IntFilter>;
  /** Filter by the object’s `hr` field. */
  hr?: Maybe<IntFilter>;
  /** Filter by the object’s `bb` field. */
  bb?: Maybe<IntFilter>;
  /** Filter by the object’s `so` field. */
  so?: Maybe<IntFilter>;
  /** Filter by the object’s `baOpp` field. */
  baOpp?: Maybe<FloatFilter>;
  /** Filter by the object’s `era` field. */
  era?: Maybe<FloatFilter>;
  /** Filter by the object’s `ibb` field. */
  ibb?: Maybe<IntFilter>;
  /** Filter by the object’s `wp` field. */
  wp?: Maybe<IntFilter>;
  /** Filter by the object’s `hbp` field. */
  hbp?: Maybe<IntFilter>;
  /** Filter by the object’s `bk` field. */
  bk?: Maybe<IntFilter>;
  /** Filter by the object’s `bfp` field. */
  bfp?: Maybe<IntFilter>;
  /** Filter by the object’s `gf` field. */
  gf?: Maybe<IntFilter>;
  /** Filter by the object’s `r` field. */
  r?: Maybe<IntFilter>;
  /** Filter by the object’s `sh` field. */
  sh?: Maybe<IntFilter>;
  /** Filter by the object’s `sf` field. */
  sf?: Maybe<IntFilter>;
  /** Filter by the object’s `gidp` field. */
  gidp?: Maybe<IntFilter>;
  /** Filter by the object’s `whip` field. */
  whip?: Maybe<FloatFilter>;
  /** Filter by the object’s `h9` field. */
  h9?: Maybe<FloatFilter>;
  /** Filter by the object’s `hr9` field. */
  hr9?: Maybe<FloatFilter>;
  /** Filter by the object’s `k9` field. */
  k9?: Maybe<FloatFilter>;
  /** Filter by the object’s `bb9` field. */
  bb9?: Maybe<FloatFilter>;
  /** Filter by the object’s `sow` field. */
  sow?: Maybe<FloatFilter>;
  /** Checks for all expressions in this list. */
  and?: Maybe<Array<LahmanPitchingpostFilter>>;
  /** Checks for any expressions in this list. */
  or?: Maybe<Array<LahmanPitchingpostFilter>>;
  /** Negates the expression. */
  not?: Maybe<LahmanPitchingpostFilter>;
};

/** An input for mutations affecting `LahmanPitchingpost` */
export type LahmanPitchingpostInput = {
  playerId: Scalars['String'];
  year: Scalars['Int'];
  round: Scalars['String'];
  teamId?: Maybe<Scalars['String']>;
  lgId?: Maybe<Scalars['String']>;
  w?: Maybe<Scalars['Int']>;
  l?: Maybe<Scalars['Int']>;
  g?: Maybe<Scalars['Int']>;
  gs?: Maybe<Scalars['Int']>;
  cg?: Maybe<Scalars['Int']>;
  sho?: Maybe<Scalars['Int']>;
  sv?: Maybe<Scalars['Int']>;
  ipOuts?: Maybe<Scalars['Int']>;
  h?: Maybe<Scalars['Int']>;
  er?: Maybe<Scalars['Int']>;
  hr?: Maybe<Scalars['Int']>;
  bb?: Maybe<Scalars['Int']>;
  so?: Maybe<Scalars['Int']>;
  baOpp?: Maybe<Scalars['Float']>;
  era?: Maybe<Scalars['Float']>;
  ibb?: Maybe<Scalars['Int']>;
  wp?: Maybe<Scalars['Int']>;
  hbp?: Maybe<Scalars['Int']>;
  bk?: Maybe<Scalars['Int']>;
  bfp?: Maybe<Scalars['Int']>;
  gf?: Maybe<Scalars['Int']>;
  r?: Maybe<Scalars['Int']>;
  sh?: Maybe<Scalars['Int']>;
  sf?: Maybe<Scalars['Int']>;
  gidp?: Maybe<Scalars['Int']>;
  whip?: Maybe<Scalars['Float']>;
  h9?: Maybe<Scalars['Float']>;
  hr9?: Maybe<Scalars['Float']>;
  k9?: Maybe<Scalars['Float']>;
  bb9?: Maybe<Scalars['Float']>;
  sow?: Maybe<Scalars['Float']>;
};

/** Represents an update to a `LahmanPitchingpost`. Fields that are set will be updated. */
export type LahmanPitchingpostPatch = {
  playerId?: Maybe<Scalars['String']>;
  year?: Maybe<Scalars['Int']>;
  round?: Maybe<Scalars['String']>;
  teamId?: Maybe<Scalars['String']>;
  lgId?: Maybe<Scalars['String']>;
  w?: Maybe<Scalars['Int']>;
  l?: Maybe<Scalars['Int']>;
  g?: Maybe<Scalars['Int']>;
  gs?: Maybe<Scalars['Int']>;
  cg?: Maybe<Scalars['Int']>;
  sho?: Maybe<Scalars['Int']>;
  sv?: Maybe<Scalars['Int']>;
  ipOuts?: Maybe<Scalars['Int']>;
  h?: Maybe<Scalars['Int']>;
  er?: Maybe<Scalars['Int']>;
  hr?: Maybe<Scalars['Int']>;
  bb?: Maybe<Scalars['Int']>;
  so?: Maybe<Scalars['Int']>;
  baOpp?: Maybe<Scalars['Float']>;
  era?: Maybe<Scalars['Float']>;
  ibb?: Maybe<Scalars['Int']>;
  wp?: Maybe<Scalars['Int']>;
  hbp?: Maybe<Scalars['Int']>;
  bk?: Maybe<Scalars['Int']>;
  bfp?: Maybe<Scalars['Int']>;
  gf?: Maybe<Scalars['Int']>;
  r?: Maybe<Scalars['Int']>;
  sh?: Maybe<Scalars['Int']>;
  sf?: Maybe<Scalars['Int']>;
  gidp?: Maybe<Scalars['Int']>;
  whip?: Maybe<Scalars['Float']>;
  h9?: Maybe<Scalars['Float']>;
  hr9?: Maybe<Scalars['Float']>;
  k9?: Maybe<Scalars['Float']>;
  bb9?: Maybe<Scalars['Float']>;
  sow?: Maybe<Scalars['Float']>;
};

/** A connection to a list of `LahmanPitchingpost` values. */
export type LahmanPitchingpostsConnection = {
  __typename?: 'LahmanPitchingpostsConnection';
  /** A list of `LahmanPitchingpost` objects. */
  nodes: Array<Maybe<LahmanPitchingpost>>;
  /** A list of edges which contains the `LahmanPitchingpost` and cursor to aid in pagination. */
  edges: Array<LahmanPitchingpostsEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `LahmanPitchingpost` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `LahmanPitchingpost` edge in the connection. */
export type LahmanPitchingpostsEdge = {
  __typename?: 'LahmanPitchingpostsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `LahmanPitchingpost` at the end of the edge. */
  node?: Maybe<LahmanPitchingpost>;
};

/** Methods to use when ordering `LahmanPitchingpost`. */
export enum LahmanPitchingpostsOrderBy {
  Natural = 'NATURAL',
  PlayerIdAsc = 'PLAYER_ID_ASC',
  PlayerIdDesc = 'PLAYER_ID_DESC',
  YearAsc = 'YEAR_ASC',
  YearDesc = 'YEAR_DESC',
  RoundAsc = 'ROUND_ASC',
  RoundDesc = 'ROUND_DESC',
  TeamIdAsc = 'TEAM_ID_ASC',
  TeamIdDesc = 'TEAM_ID_DESC',
  LgIdAsc = 'LG_ID_ASC',
  LgIdDesc = 'LG_ID_DESC',
  WAsc = 'W_ASC',
  WDesc = 'W_DESC',
  LAsc = 'L_ASC',
  LDesc = 'L_DESC',
  GAsc = 'G_ASC',
  GDesc = 'G_DESC',
  GsAsc = 'GS_ASC',
  GsDesc = 'GS_DESC',
  CgAsc = 'CG_ASC',
  CgDesc = 'CG_DESC',
  ShoAsc = 'SHO_ASC',
  ShoDesc = 'SHO_DESC',
  SvAsc = 'SV_ASC',
  SvDesc = 'SV_DESC',
  IpOutsAsc = 'IP_OUTS_ASC',
  IpOutsDesc = 'IP_OUTS_DESC',
  HAsc = 'H_ASC',
  HDesc = 'H_DESC',
  ErAsc = 'ER_ASC',
  ErDesc = 'ER_DESC',
  HrAsc = 'HR_ASC',
  HrDesc = 'HR_DESC',
  BbAsc = 'BB_ASC',
  BbDesc = 'BB_DESC',
  SoAsc = 'SO_ASC',
  SoDesc = 'SO_DESC',
  BaOppAsc = 'BA_OPP_ASC',
  BaOppDesc = 'BA_OPP_DESC',
  EraAsc = 'ERA_ASC',
  EraDesc = 'ERA_DESC',
  IbbAsc = 'IBB_ASC',
  IbbDesc = 'IBB_DESC',
  WpAsc = 'WP_ASC',
  WpDesc = 'WP_DESC',
  HbpAsc = 'HBP_ASC',
  HbpDesc = 'HBP_DESC',
  BkAsc = 'BK_ASC',
  BkDesc = 'BK_DESC',
  BfpAsc = 'BFP_ASC',
  BfpDesc = 'BFP_DESC',
  GfAsc = 'GF_ASC',
  GfDesc = 'GF_DESC',
  RAsc = 'R_ASC',
  RDesc = 'R_DESC',
  ShAsc = 'SH_ASC',
  ShDesc = 'SH_DESC',
  SfAsc = 'SF_ASC',
  SfDesc = 'SF_DESC',
  GidpAsc = 'GIDP_ASC',
  GidpDesc = 'GIDP_DESC',
  WhipAsc = 'WHIP_ASC',
  WhipDesc = 'WHIP_DESC',
  H9Asc = 'H9_ASC',
  H9Desc = 'H9_DESC',
  Hr9Asc = 'HR9_ASC',
  Hr9Desc = 'HR9_DESC',
  K9Asc = 'K9_ASC',
  K9Desc = 'K9_DESC',
  Bb9Asc = 'BB9_ASC',
  Bb9Desc = 'BB9_DESC',
  SowAsc = 'SOW_ASC',
  SowDesc = 'SOW_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

/** A connection to a list of `LahmanPitching` values. */
export type LahmanPitchingsConnection = {
  __typename?: 'LahmanPitchingsConnection';
  /** A list of `LahmanPitching` objects. */
  nodes: Array<Maybe<LahmanPitching>>;
  /** A list of edges which contains the `LahmanPitching` and cursor to aid in pagination. */
  edges: Array<LahmanPitchingsEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `LahmanPitching` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `LahmanPitching` edge in the connection. */
export type LahmanPitchingsEdge = {
  __typename?: 'LahmanPitchingsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `LahmanPitching` at the end of the edge. */
  node?: Maybe<LahmanPitching>;
};

/** Methods to use when ordering `LahmanPitching`. */
export enum LahmanPitchingsOrderBy {
  Natural = 'NATURAL',
  PlayerIdAsc = 'PLAYER_ID_ASC',
  PlayerIdDesc = 'PLAYER_ID_DESC',
  YearAsc = 'YEAR_ASC',
  YearDesc = 'YEAR_DESC',
  StintAsc = 'STINT_ASC',
  StintDesc = 'STINT_DESC',
  TeamIdAsc = 'TEAM_ID_ASC',
  TeamIdDesc = 'TEAM_ID_DESC',
  LgIdAsc = 'LG_ID_ASC',
  LgIdDesc = 'LG_ID_DESC',
  WAsc = 'W_ASC',
  WDesc = 'W_DESC',
  LAsc = 'L_ASC',
  LDesc = 'L_DESC',
  GAsc = 'G_ASC',
  GDesc = 'G_DESC',
  GsAsc = 'GS_ASC',
  GsDesc = 'GS_DESC',
  CgAsc = 'CG_ASC',
  CgDesc = 'CG_DESC',
  ShoAsc = 'SHO_ASC',
  ShoDesc = 'SHO_DESC',
  SvAsc = 'SV_ASC',
  SvDesc = 'SV_DESC',
  IpOutsAsc = 'IP_OUTS_ASC',
  IpOutsDesc = 'IP_OUTS_DESC',
  HAsc = 'H_ASC',
  HDesc = 'H_DESC',
  ErAsc = 'ER_ASC',
  ErDesc = 'ER_DESC',
  HrAsc = 'HR_ASC',
  HrDesc = 'HR_DESC',
  BbAsc = 'BB_ASC',
  BbDesc = 'BB_DESC',
  SoAsc = 'SO_ASC',
  SoDesc = 'SO_DESC',
  BaOppAsc = 'BA_OPP_ASC',
  BaOppDesc = 'BA_OPP_DESC',
  EraAsc = 'ERA_ASC',
  EraDesc = 'ERA_DESC',
  IbbAsc = 'IBB_ASC',
  IbbDesc = 'IBB_DESC',
  WpAsc = 'WP_ASC',
  WpDesc = 'WP_DESC',
  HbpAsc = 'HBP_ASC',
  HbpDesc = 'HBP_DESC',
  BkAsc = 'BK_ASC',
  BkDesc = 'BK_DESC',
  BfpAsc = 'BFP_ASC',
  BfpDesc = 'BFP_DESC',
  GfAsc = 'GF_ASC',
  GfDesc = 'GF_DESC',
  RAsc = 'R_ASC',
  RDesc = 'R_DESC',
  ShAsc = 'SH_ASC',
  ShDesc = 'SH_DESC',
  SfAsc = 'SF_ASC',
  SfDesc = 'SF_DESC',
  GidpAsc = 'GIDP_ASC',
  GidpDesc = 'GIDP_DESC',
  WhipAsc = 'WHIP_ASC',
  WhipDesc = 'WHIP_DESC',
  H9Asc = 'H9_ASC',
  H9Desc = 'H9_DESC',
  Hr9Asc = 'HR9_ASC',
  Hr9Desc = 'HR9_DESC',
  K9Asc = 'K9_ASC',
  K9Desc = 'K9_DESC',
  Bb9Asc = 'BB9_ASC',
  Bb9Desc = 'BB9_DESC',
  SowAsc = 'SOW_ASC',
  SowDesc = 'SOW_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

/** A connection to a list of `LahmanSalary` values. */
export type LahmanSalariesConnection = {
  __typename?: 'LahmanSalariesConnection';
  /** A list of `LahmanSalary` objects. */
  nodes: Array<Maybe<LahmanSalary>>;
  /** A list of edges which contains the `LahmanSalary` and cursor to aid in pagination. */
  edges: Array<LahmanSalariesEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `LahmanSalary` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `LahmanSalary` edge in the connection. */
export type LahmanSalariesEdge = {
  __typename?: 'LahmanSalariesEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `LahmanSalary` at the end of the edge. */
  node?: Maybe<LahmanSalary>;
};

/** Methods to use when ordering `LahmanSalary`. */
export enum LahmanSalariesOrderBy {
  Natural = 'NATURAL',
  YearAsc = 'YEAR_ASC',
  YearDesc = 'YEAR_DESC',
  TeamIdAsc = 'TEAM_ID_ASC',
  TeamIdDesc = 'TEAM_ID_DESC',
  LgIdAsc = 'LG_ID_ASC',
  LgIdDesc = 'LG_ID_DESC',
  PlayerIdAsc = 'PLAYER_ID_ASC',
  PlayerIdDesc = 'PLAYER_ID_DESC',
  SalaryAsc = 'SALARY_ASC',
  SalaryDesc = 'SALARY_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

export type LahmanSalary = Node & {
  __typename?: 'LahmanSalary';
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  year: Scalars['Int'];
  teamId: Scalars['String'];
  lgId?: Maybe<Scalars['String']>;
  playerId: Scalars['String'];
  salary?: Maybe<Scalars['BigInt']>;
  /** Reads a single `LahmanPerson` that is related to this `LahmanSalary`. */
  lahmanPersonByPlayerId?: Maybe<LahmanPerson>;
};

/**
 * A condition to be used against `LahmanSalary` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type LahmanSalaryCondition = {
  /** Checks for equality with the object’s `year` field. */
  year?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `teamId` field. */
  teamId?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `lgId` field. */
  lgId?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `playerId` field. */
  playerId?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `salary` field. */
  salary?: Maybe<Scalars['BigInt']>;
};

/** A filter to be used against `LahmanSalary` object types. All fields are combined with a logical ‘and.’ */
export type LahmanSalaryFilter = {
  /** Filter by the object’s `year` field. */
  year?: Maybe<IntFilter>;
  /** Filter by the object’s `teamId` field. */
  teamId?: Maybe<StringFilter>;
  /** Filter by the object’s `lgId` field. */
  lgId?: Maybe<StringFilter>;
  /** Filter by the object’s `playerId` field. */
  playerId?: Maybe<StringFilter>;
  /** Filter by the object’s `salary` field. */
  salary?: Maybe<BigIntFilter>;
  /** Checks for all expressions in this list. */
  and?: Maybe<Array<LahmanSalaryFilter>>;
  /** Checks for any expressions in this list. */
  or?: Maybe<Array<LahmanSalaryFilter>>;
  /** Negates the expression. */
  not?: Maybe<LahmanSalaryFilter>;
};

/** An input for mutations affecting `LahmanSalary` */
export type LahmanSalaryInput = {
  year: Scalars['Int'];
  teamId: Scalars['String'];
  lgId?: Maybe<Scalars['String']>;
  playerId: Scalars['String'];
  salary?: Maybe<Scalars['BigInt']>;
};

/** Represents an update to a `LahmanSalary`. Fields that are set will be updated. */
export type LahmanSalaryPatch = {
  year?: Maybe<Scalars['Int']>;
  teamId?: Maybe<Scalars['String']>;
  lgId?: Maybe<Scalars['String']>;
  playerId?: Maybe<Scalars['String']>;
  salary?: Maybe<Scalars['BigInt']>;
};

export type LahmanTeam = Node & {
  __typename?: 'LahmanTeam';
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  year: Scalars['Int'];
  lgId?: Maybe<Scalars['String']>;
  teamId: Scalars['String'];
  franchId?: Maybe<Scalars['String']>;
  divId?: Maybe<Scalars['String']>;
  rank?: Maybe<Scalars['Int']>;
  g?: Maybe<Scalars['Int']>;
  gHome?: Maybe<Scalars['Int']>;
  w?: Maybe<Scalars['Int']>;
  l?: Maybe<Scalars['Int']>;
  divWin?: Maybe<Scalars['String']>;
  wcWin?: Maybe<Scalars['String']>;
  lgWin?: Maybe<Scalars['String']>;
  wsWin?: Maybe<Scalars['String']>;
  r?: Maybe<Scalars['Int']>;
  ab?: Maybe<Scalars['Int']>;
  h?: Maybe<Scalars['Int']>;
  double?: Maybe<Scalars['Int']>;
  triple?: Maybe<Scalars['Int']>;
  hr?: Maybe<Scalars['Int']>;
  bb?: Maybe<Scalars['Int']>;
  so?: Maybe<Scalars['Int']>;
  sb?: Maybe<Scalars['Int']>;
  cs?: Maybe<Scalars['Int']>;
  hbp?: Maybe<Scalars['Int']>;
  sf?: Maybe<Scalars['Int']>;
  ra?: Maybe<Scalars['Int']>;
  er?: Maybe<Scalars['Int']>;
  era?: Maybe<Scalars['Float']>;
  cg?: Maybe<Scalars['Int']>;
  sho?: Maybe<Scalars['Int']>;
  sv?: Maybe<Scalars['Int']>;
  ipOuts?: Maybe<Scalars['Int']>;
  ha?: Maybe<Scalars['Int']>;
  hra?: Maybe<Scalars['Int']>;
  bba?: Maybe<Scalars['Int']>;
  soa?: Maybe<Scalars['Int']>;
  e?: Maybe<Scalars['Int']>;
  dp?: Maybe<Scalars['Int']>;
  fp?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  park?: Maybe<Scalars['String']>;
  attendance?: Maybe<Scalars['BigInt']>;
  bpf?: Maybe<Scalars['Int']>;
  ppf?: Maybe<Scalars['Int']>;
  teamIdBr?: Maybe<Scalars['String']>;
  teamIdLahman45?: Maybe<Scalars['String']>;
  teamIdRetro?: Maybe<Scalars['String']>;
  /** Reads and enables pagination through a set of `RetroTeamGame`. */
  retroTeamGamesByTeamIdAndYear: RetroTeamGamesConnection;
};


export type LahmanTeamRetroTeamGamesByTeamIdAndYearArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<RetroTeamGamesOrderBy>>;
  condition?: Maybe<RetroTeamGameCondition>;
  filter?: Maybe<RetroTeamGameFilter>;
};

/**
 * A condition to be used against `LahmanTeam` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type LahmanTeamCondition = {
  /** Checks for equality with the object’s `year` field. */
  year?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `lgId` field. */
  lgId?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `teamId` field. */
  teamId?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `franchId` field. */
  franchId?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `divId` field. */
  divId?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `rank` field. */
  rank?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `g` field. */
  g?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `gHome` field. */
  gHome?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `w` field. */
  w?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `l` field. */
  l?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `divWin` field. */
  divWin?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `wcWin` field. */
  wcWin?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `lgWin` field. */
  lgWin?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `wsWin` field. */
  wsWin?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `r` field. */
  r?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `ab` field. */
  ab?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `h` field. */
  h?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `double` field. */
  double?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `triple` field. */
  triple?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `hr` field. */
  hr?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `bb` field. */
  bb?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `so` field. */
  so?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `sb` field. */
  sb?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `cs` field. */
  cs?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `hbp` field. */
  hbp?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `sf` field. */
  sf?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `ra` field. */
  ra?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `er` field. */
  er?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `era` field. */
  era?: Maybe<Scalars['Float']>;
  /** Checks for equality with the object’s `cg` field. */
  cg?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `sho` field. */
  sho?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `sv` field. */
  sv?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `ipOuts` field. */
  ipOuts?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `ha` field. */
  ha?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `hra` field. */
  hra?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `bba` field. */
  bba?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `soa` field. */
  soa?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `e` field. */
  e?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `dp` field. */
  dp?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `fp` field. */
  fp?: Maybe<Scalars['Float']>;
  /** Checks for equality with the object’s `name` field. */
  name?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `park` field. */
  park?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `attendance` field. */
  attendance?: Maybe<Scalars['BigInt']>;
  /** Checks for equality with the object’s `bpf` field. */
  bpf?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `ppf` field. */
  ppf?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `teamIdBr` field. */
  teamIdBr?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `teamIdLahman45` field. */
  teamIdLahman45?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `teamIdRetro` field. */
  teamIdRetro?: Maybe<Scalars['String']>;
};

/** A filter to be used against `LahmanTeam` object types. All fields are combined with a logical ‘and.’ */
export type LahmanTeamFilter = {
  /** Filter by the object’s `year` field. */
  year?: Maybe<IntFilter>;
  /** Filter by the object’s `lgId` field. */
  lgId?: Maybe<StringFilter>;
  /** Filter by the object’s `teamId` field. */
  teamId?: Maybe<StringFilter>;
  /** Filter by the object’s `franchId` field. */
  franchId?: Maybe<StringFilter>;
  /** Filter by the object’s `divId` field. */
  divId?: Maybe<StringFilter>;
  /** Filter by the object’s `rank` field. */
  rank?: Maybe<IntFilter>;
  /** Filter by the object’s `g` field. */
  g?: Maybe<IntFilter>;
  /** Filter by the object’s `gHome` field. */
  gHome?: Maybe<IntFilter>;
  /** Filter by the object’s `w` field. */
  w?: Maybe<IntFilter>;
  /** Filter by the object’s `l` field. */
  l?: Maybe<IntFilter>;
  /** Filter by the object’s `divWin` field. */
  divWin?: Maybe<StringFilter>;
  /** Filter by the object’s `wcWin` field. */
  wcWin?: Maybe<StringFilter>;
  /** Filter by the object’s `lgWin` field. */
  lgWin?: Maybe<StringFilter>;
  /** Filter by the object’s `wsWin` field. */
  wsWin?: Maybe<StringFilter>;
  /** Filter by the object’s `r` field. */
  r?: Maybe<IntFilter>;
  /** Filter by the object’s `ab` field. */
  ab?: Maybe<IntFilter>;
  /** Filter by the object’s `h` field. */
  h?: Maybe<IntFilter>;
  /** Filter by the object’s `double` field. */
  double?: Maybe<IntFilter>;
  /** Filter by the object’s `triple` field. */
  triple?: Maybe<IntFilter>;
  /** Filter by the object’s `hr` field. */
  hr?: Maybe<IntFilter>;
  /** Filter by the object’s `bb` field. */
  bb?: Maybe<IntFilter>;
  /** Filter by the object’s `so` field. */
  so?: Maybe<IntFilter>;
  /** Filter by the object’s `sb` field. */
  sb?: Maybe<IntFilter>;
  /** Filter by the object’s `cs` field. */
  cs?: Maybe<IntFilter>;
  /** Filter by the object’s `hbp` field. */
  hbp?: Maybe<IntFilter>;
  /** Filter by the object’s `sf` field. */
  sf?: Maybe<IntFilter>;
  /** Filter by the object’s `ra` field. */
  ra?: Maybe<IntFilter>;
  /** Filter by the object’s `er` field. */
  er?: Maybe<IntFilter>;
  /** Filter by the object’s `era` field. */
  era?: Maybe<FloatFilter>;
  /** Filter by the object’s `cg` field. */
  cg?: Maybe<IntFilter>;
  /** Filter by the object’s `sho` field. */
  sho?: Maybe<IntFilter>;
  /** Filter by the object’s `sv` field. */
  sv?: Maybe<IntFilter>;
  /** Filter by the object’s `ipOuts` field. */
  ipOuts?: Maybe<IntFilter>;
  /** Filter by the object’s `ha` field. */
  ha?: Maybe<IntFilter>;
  /** Filter by the object’s `hra` field. */
  hra?: Maybe<IntFilter>;
  /** Filter by the object’s `bba` field. */
  bba?: Maybe<IntFilter>;
  /** Filter by the object’s `soa` field. */
  soa?: Maybe<IntFilter>;
  /** Filter by the object’s `e` field. */
  e?: Maybe<IntFilter>;
  /** Filter by the object’s `dp` field. */
  dp?: Maybe<IntFilter>;
  /** Filter by the object’s `fp` field. */
  fp?: Maybe<FloatFilter>;
  /** Filter by the object’s `name` field. */
  name?: Maybe<StringFilter>;
  /** Filter by the object’s `park` field. */
  park?: Maybe<StringFilter>;
  /** Filter by the object’s `attendance` field. */
  attendance?: Maybe<BigIntFilter>;
  /** Filter by the object’s `bpf` field. */
  bpf?: Maybe<IntFilter>;
  /** Filter by the object’s `ppf` field. */
  ppf?: Maybe<IntFilter>;
  /** Filter by the object’s `teamIdBr` field. */
  teamIdBr?: Maybe<StringFilter>;
  /** Filter by the object’s `teamIdLahman45` field. */
  teamIdLahman45?: Maybe<StringFilter>;
  /** Filter by the object’s `teamIdRetro` field. */
  teamIdRetro?: Maybe<StringFilter>;
  /** Checks for all expressions in this list. */
  and?: Maybe<Array<LahmanTeamFilter>>;
  /** Checks for any expressions in this list. */
  or?: Maybe<Array<LahmanTeamFilter>>;
  /** Negates the expression. */
  not?: Maybe<LahmanTeamFilter>;
};

/** An input for mutations affecting `LahmanTeam` */
export type LahmanTeamInput = {
  year: Scalars['Int'];
  lgId?: Maybe<Scalars['String']>;
  teamId: Scalars['String'];
  franchId?: Maybe<Scalars['String']>;
  divId?: Maybe<Scalars['String']>;
  rank?: Maybe<Scalars['Int']>;
  g?: Maybe<Scalars['Int']>;
  gHome?: Maybe<Scalars['Int']>;
  w?: Maybe<Scalars['Int']>;
  l?: Maybe<Scalars['Int']>;
  divWin?: Maybe<Scalars['String']>;
  wcWin?: Maybe<Scalars['String']>;
  lgWin?: Maybe<Scalars['String']>;
  wsWin?: Maybe<Scalars['String']>;
  r?: Maybe<Scalars['Int']>;
  ab?: Maybe<Scalars['Int']>;
  h?: Maybe<Scalars['Int']>;
  double?: Maybe<Scalars['Int']>;
  triple?: Maybe<Scalars['Int']>;
  hr?: Maybe<Scalars['Int']>;
  bb?: Maybe<Scalars['Int']>;
  so?: Maybe<Scalars['Int']>;
  sb?: Maybe<Scalars['Int']>;
  cs?: Maybe<Scalars['Int']>;
  hbp?: Maybe<Scalars['Int']>;
  sf?: Maybe<Scalars['Int']>;
  ra?: Maybe<Scalars['Int']>;
  er?: Maybe<Scalars['Int']>;
  era?: Maybe<Scalars['Float']>;
  cg?: Maybe<Scalars['Int']>;
  sho?: Maybe<Scalars['Int']>;
  sv?: Maybe<Scalars['Int']>;
  ipOuts?: Maybe<Scalars['Int']>;
  ha?: Maybe<Scalars['Int']>;
  hra?: Maybe<Scalars['Int']>;
  bba?: Maybe<Scalars['Int']>;
  soa?: Maybe<Scalars['Int']>;
  e?: Maybe<Scalars['Int']>;
  dp?: Maybe<Scalars['Int']>;
  fp?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  park?: Maybe<Scalars['String']>;
  attendance?: Maybe<Scalars['BigInt']>;
  bpf?: Maybe<Scalars['Int']>;
  ppf?: Maybe<Scalars['Int']>;
  teamIdBr?: Maybe<Scalars['String']>;
  teamIdLahman45?: Maybe<Scalars['String']>;
  teamIdRetro?: Maybe<Scalars['String']>;
};

/** Represents an update to a `LahmanTeam`. Fields that are set will be updated. */
export type LahmanTeamPatch = {
  year?: Maybe<Scalars['Int']>;
  lgId?: Maybe<Scalars['String']>;
  teamId?: Maybe<Scalars['String']>;
  franchId?: Maybe<Scalars['String']>;
  divId?: Maybe<Scalars['String']>;
  rank?: Maybe<Scalars['Int']>;
  g?: Maybe<Scalars['Int']>;
  gHome?: Maybe<Scalars['Int']>;
  w?: Maybe<Scalars['Int']>;
  l?: Maybe<Scalars['Int']>;
  divWin?: Maybe<Scalars['String']>;
  wcWin?: Maybe<Scalars['String']>;
  lgWin?: Maybe<Scalars['String']>;
  wsWin?: Maybe<Scalars['String']>;
  r?: Maybe<Scalars['Int']>;
  ab?: Maybe<Scalars['Int']>;
  h?: Maybe<Scalars['Int']>;
  double?: Maybe<Scalars['Int']>;
  triple?: Maybe<Scalars['Int']>;
  hr?: Maybe<Scalars['Int']>;
  bb?: Maybe<Scalars['Int']>;
  so?: Maybe<Scalars['Int']>;
  sb?: Maybe<Scalars['Int']>;
  cs?: Maybe<Scalars['Int']>;
  hbp?: Maybe<Scalars['Int']>;
  sf?: Maybe<Scalars['Int']>;
  ra?: Maybe<Scalars['Int']>;
  er?: Maybe<Scalars['Int']>;
  era?: Maybe<Scalars['Float']>;
  cg?: Maybe<Scalars['Int']>;
  sho?: Maybe<Scalars['Int']>;
  sv?: Maybe<Scalars['Int']>;
  ipOuts?: Maybe<Scalars['Int']>;
  ha?: Maybe<Scalars['Int']>;
  hra?: Maybe<Scalars['Int']>;
  bba?: Maybe<Scalars['Int']>;
  soa?: Maybe<Scalars['Int']>;
  e?: Maybe<Scalars['Int']>;
  dp?: Maybe<Scalars['Int']>;
  fp?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  park?: Maybe<Scalars['String']>;
  attendance?: Maybe<Scalars['BigInt']>;
  bpf?: Maybe<Scalars['Int']>;
  ppf?: Maybe<Scalars['Int']>;
  teamIdBr?: Maybe<Scalars['String']>;
  teamIdLahman45?: Maybe<Scalars['String']>;
  teamIdRetro?: Maybe<Scalars['String']>;
};

/** A connection to a list of `LahmanTeam` values. */
export type LahmanTeamsConnection = {
  __typename?: 'LahmanTeamsConnection';
  /** A list of `LahmanTeam` objects. */
  nodes: Array<Maybe<LahmanTeam>>;
  /** A list of edges which contains the `LahmanTeam` and cursor to aid in pagination. */
  edges: Array<LahmanTeamsEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `LahmanTeam` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `LahmanTeam` edge in the connection. */
export type LahmanTeamsEdge = {
  __typename?: 'LahmanTeamsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `LahmanTeam` at the end of the edge. */
  node?: Maybe<LahmanTeam>;
};

/** Methods to use when ordering `LahmanTeam`. */
export enum LahmanTeamsOrderBy {
  Natural = 'NATURAL',
  YearAsc = 'YEAR_ASC',
  YearDesc = 'YEAR_DESC',
  LgIdAsc = 'LG_ID_ASC',
  LgIdDesc = 'LG_ID_DESC',
  TeamIdAsc = 'TEAM_ID_ASC',
  TeamIdDesc = 'TEAM_ID_DESC',
  FranchIdAsc = 'FRANCH_ID_ASC',
  FranchIdDesc = 'FRANCH_ID_DESC',
  DivIdAsc = 'DIV_ID_ASC',
  DivIdDesc = 'DIV_ID_DESC',
  RankAsc = 'RANK_ASC',
  RankDesc = 'RANK_DESC',
  GAsc = 'G_ASC',
  GDesc = 'G_DESC',
  GHomeAsc = 'G_HOME_ASC',
  GHomeDesc = 'G_HOME_DESC',
  WAsc = 'W_ASC',
  WDesc = 'W_DESC',
  LAsc = 'L_ASC',
  LDesc = 'L_DESC',
  DivWinAsc = 'DIV_WIN_ASC',
  DivWinDesc = 'DIV_WIN_DESC',
  WcWinAsc = 'WC_WIN_ASC',
  WcWinDesc = 'WC_WIN_DESC',
  LgWinAsc = 'LG_WIN_ASC',
  LgWinDesc = 'LG_WIN_DESC',
  WsWinAsc = 'WS_WIN_ASC',
  WsWinDesc = 'WS_WIN_DESC',
  RAsc = 'R_ASC',
  RDesc = 'R_DESC',
  AbAsc = 'AB_ASC',
  AbDesc = 'AB_DESC',
  HAsc = 'H_ASC',
  HDesc = 'H_DESC',
  DoubleAsc = 'DOUBLE_ASC',
  DoubleDesc = 'DOUBLE_DESC',
  TripleAsc = 'TRIPLE_ASC',
  TripleDesc = 'TRIPLE_DESC',
  HrAsc = 'HR_ASC',
  HrDesc = 'HR_DESC',
  BbAsc = 'BB_ASC',
  BbDesc = 'BB_DESC',
  SoAsc = 'SO_ASC',
  SoDesc = 'SO_DESC',
  SbAsc = 'SB_ASC',
  SbDesc = 'SB_DESC',
  CsAsc = 'CS_ASC',
  CsDesc = 'CS_DESC',
  HbpAsc = 'HBP_ASC',
  HbpDesc = 'HBP_DESC',
  SfAsc = 'SF_ASC',
  SfDesc = 'SF_DESC',
  RaAsc = 'RA_ASC',
  RaDesc = 'RA_DESC',
  ErAsc = 'ER_ASC',
  ErDesc = 'ER_DESC',
  EraAsc = 'ERA_ASC',
  EraDesc = 'ERA_DESC',
  CgAsc = 'CG_ASC',
  CgDesc = 'CG_DESC',
  ShoAsc = 'SHO_ASC',
  ShoDesc = 'SHO_DESC',
  SvAsc = 'SV_ASC',
  SvDesc = 'SV_DESC',
  IpOutsAsc = 'IP_OUTS_ASC',
  IpOutsDesc = 'IP_OUTS_DESC',
  HaAsc = 'HA_ASC',
  HaDesc = 'HA_DESC',
  HraAsc = 'HRA_ASC',
  HraDesc = 'HRA_DESC',
  BbaAsc = 'BBA_ASC',
  BbaDesc = 'BBA_DESC',
  SoaAsc = 'SOA_ASC',
  SoaDesc = 'SOA_DESC',
  EAsc = 'E_ASC',
  EDesc = 'E_DESC',
  DpAsc = 'DP_ASC',
  DpDesc = 'DP_DESC',
  FpAsc = 'FP_ASC',
  FpDesc = 'FP_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  ParkAsc = 'PARK_ASC',
  ParkDesc = 'PARK_DESC',
  AttendanceAsc = 'ATTENDANCE_ASC',
  AttendanceDesc = 'ATTENDANCE_DESC',
  BpfAsc = 'BPF_ASC',
  BpfDesc = 'BPF_DESC',
  PpfAsc = 'PPF_ASC',
  PpfDesc = 'PPF_DESC',
  TeamIdBrAsc = 'TEAM_ID_BR_ASC',
  TeamIdBrDesc = 'TEAM_ID_BR_DESC',
  TeamIdLahman45Asc = 'TEAM_ID_LAHMAN45_ASC',
  TeamIdLahman45Desc = 'TEAM_ID_LAHMAN45_DESC',
  TeamIdRetroAsc = 'TEAM_ID_RETRO_ASC',
  TeamIdRetroDesc = 'TEAM_ID_RETRO_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

/** The root mutation type which contains root level fields which mutate data. */
export type Mutation = {
  __typename?: 'Mutation';
  /** Creates a single `LahmanBatting`. */
  createLahmanBatting?: Maybe<CreateLahmanBattingPayload>;
  /** Creates a single `LahmanBattingpost`. */
  createLahmanBattingpost?: Maybe<CreateLahmanBattingpostPayload>;
  /** Creates a single `LahmanFielding`. */
  createLahmanFielding?: Maybe<CreateLahmanFieldingPayload>;
  /** Creates a single `LahmanFieldingpost`. */
  createLahmanFieldingpost?: Maybe<CreateLahmanFieldingpostPayload>;
  /** Creates a single `LahmanPark`. */
  createLahmanPark?: Maybe<CreateLahmanParkPayload>;
  /** Creates a single `LahmanPerson`. */
  createLahmanPerson?: Maybe<CreateLahmanPersonPayload>;
  /** Creates a single `LahmanPitching`. */
  createLahmanPitching?: Maybe<CreateLahmanPitchingPayload>;
  /** Creates a single `LahmanPitchingpost`. */
  createLahmanPitchingpost?: Maybe<CreateLahmanPitchingpostPayload>;
  /** Creates a single `LahmanSalary`. */
  createLahmanSalary?: Maybe<CreateLahmanSalaryPayload>;
  /** Creates a single `LahmanTeam`. */
  createLahmanTeam?: Maybe<CreateLahmanTeamPayload>;
  /** Creates a single `RetroBatting`. */
  createRetroBatting?: Maybe<CreateRetroBattingPayload>;
  /** Creates a single `RetroEvent`. */
  createRetroEvent?: Maybe<CreateRetroEventPayload>;
  /** Creates a single `RetroFielding`. */
  createRetroFielding?: Maybe<CreateRetroFieldingPayload>;
  /** Creates a single `RetroGame`. */
  createRetroGame?: Maybe<CreateRetroGamePayload>;
  /** Creates a single `RetroPitching`. */
  createRetroPitching?: Maybe<CreateRetroPitchingPayload>;
  /** Creates a single `RetroTeamGame`. */
  createRetroTeamGame?: Maybe<CreateRetroTeamGamePayload>;
  /** Updates a single `LahmanBatting` using its globally unique id and a patch. */
  updateLahmanBatting?: Maybe<UpdateLahmanBattingPayload>;
  /** Updates a single `LahmanBatting` using a unique key and a patch. */
  updateLahmanBattingByPlayerIdAndYearAndStint?: Maybe<UpdateLahmanBattingPayload>;
  /** Updates a single `LahmanBattingpost` using its globally unique id and a patch. */
  updateLahmanBattingpost?: Maybe<UpdateLahmanBattingpostPayload>;
  /** Updates a single `LahmanBattingpost` using a unique key and a patch. */
  updateLahmanBattingpostByPlayerIdAndYearAndRound?: Maybe<UpdateLahmanBattingpostPayload>;
  /** Updates a single `LahmanFielding` using its globally unique id and a patch. */
  updateLahmanFielding?: Maybe<UpdateLahmanFieldingPayload>;
  /** Updates a single `LahmanFielding` using a unique key and a patch. */
  updateLahmanFieldingByPlayerIdAndYearAndStintAndPos?: Maybe<UpdateLahmanFieldingPayload>;
  /** Updates a single `LahmanFieldingpost` using its globally unique id and a patch. */
  updateLahmanFieldingpost?: Maybe<UpdateLahmanFieldingpostPayload>;
  /** Updates a single `LahmanFieldingpost` using a unique key and a patch. */
  updateLahmanFieldingpostByPlayerIdAndYearAndRoundAndPos?: Maybe<UpdateLahmanFieldingpostPayload>;
  /** Updates a single `LahmanPark` using its globally unique id and a patch. */
  updateLahmanPark?: Maybe<UpdateLahmanParkPayload>;
  /** Updates a single `LahmanPark` using a unique key and a patch. */
  updateLahmanParkByParkKey?: Maybe<UpdateLahmanParkPayload>;
  /** Updates a single `LahmanPerson` using its globally unique id and a patch. */
  updateLahmanPerson?: Maybe<UpdateLahmanPersonPayload>;
  /** Updates a single `LahmanPerson` using a unique key and a patch. */
  updateLahmanPersonByPlayerId?: Maybe<UpdateLahmanPersonPayload>;
  /** Updates a single `LahmanPerson` using a unique key and a patch. */
  updateLahmanPersonByRetroId?: Maybe<UpdateLahmanPersonPayload>;
  /** Updates a single `LahmanPitching` using its globally unique id and a patch. */
  updateLahmanPitching?: Maybe<UpdateLahmanPitchingPayload>;
  /** Updates a single `LahmanPitching` using a unique key and a patch. */
  updateLahmanPitchingByPlayerIdAndYearAndStint?: Maybe<UpdateLahmanPitchingPayload>;
  /** Updates a single `LahmanPitchingpost` using its globally unique id and a patch. */
  updateLahmanPitchingpost?: Maybe<UpdateLahmanPitchingpostPayload>;
  /** Updates a single `LahmanPitchingpost` using a unique key and a patch. */
  updateLahmanPitchingpostByPlayerIdAndYearAndRound?: Maybe<UpdateLahmanPitchingpostPayload>;
  /** Updates a single `LahmanSalary` using its globally unique id and a patch. */
  updateLahmanSalary?: Maybe<UpdateLahmanSalaryPayload>;
  /** Updates a single `LahmanSalary` using a unique key and a patch. */
  updateLahmanSalaryByPlayerIdAndYearAndTeamId?: Maybe<UpdateLahmanSalaryPayload>;
  /** Updates a single `LahmanTeam` using its globally unique id and a patch. */
  updateLahmanTeam?: Maybe<UpdateLahmanTeamPayload>;
  /** Updates a single `LahmanTeam` using a unique key and a patch. */
  updateLahmanTeamByTeamIdAndYear?: Maybe<UpdateLahmanTeamPayload>;
  /** Updates a single `LahmanTeam` using a unique key and a patch. */
  updateLahmanTeamByTeamIdRetroAndYear?: Maybe<UpdateLahmanTeamPayload>;
  /** Updates a single `RetroBatting` using its globally unique id and a patch. */
  updateRetroBatting?: Maybe<UpdateRetroBattingPayload>;
  /** Updates a single `RetroBatting` using a unique key and a patch. */
  updateRetroBattingByPlayerIdAndGameId?: Maybe<UpdateRetroBattingPayload>;
  /** Updates a single `RetroEvent` using its globally unique id and a patch. */
  updateRetroEvent?: Maybe<UpdateRetroEventPayload>;
  /** Updates a single `RetroEvent` using a unique key and a patch. */
  updateRetroEventByGameIdAndEventId?: Maybe<UpdateRetroEventPayload>;
  /** Updates a single `RetroFielding` using its globally unique id and a patch. */
  updateRetroFielding?: Maybe<UpdateRetroFieldingPayload>;
  /** Updates a single `RetroFielding` using a unique key and a patch. */
  updateRetroFieldingByPlayerIdAndGameIdAndPos?: Maybe<UpdateRetroFieldingPayload>;
  /** Updates a single `RetroGame` using its globally unique id and a patch. */
  updateRetroGame?: Maybe<UpdateRetroGamePayload>;
  /** Updates a single `RetroGame` using a unique key and a patch. */
  updateRetroGameByGameId?: Maybe<UpdateRetroGamePayload>;
  /** Updates a single `RetroPitching` using its globally unique id and a patch. */
  updateRetroPitching?: Maybe<UpdateRetroPitchingPayload>;
  /** Updates a single `RetroPitching` using a unique key and a patch. */
  updateRetroPitchingByPlayerIdAndGameId?: Maybe<UpdateRetroPitchingPayload>;
  /** Updates a single `RetroTeamGame` using its globally unique id and a patch. */
  updateRetroTeamGame?: Maybe<UpdateRetroTeamGamePayload>;
  /** Updates a single `RetroTeamGame` using a unique key and a patch. */
  updateRetroTeamGameByTeamIdAndGameId?: Maybe<UpdateRetroTeamGamePayload>;
  /** Deletes a single `LahmanBatting` using its globally unique id. */
  deleteLahmanBatting?: Maybe<DeleteLahmanBattingPayload>;
  /** Deletes a single `LahmanBatting` using a unique key. */
  deleteLahmanBattingByPlayerIdAndYearAndStint?: Maybe<DeleteLahmanBattingPayload>;
  /** Deletes a single `LahmanBattingpost` using its globally unique id. */
  deleteLahmanBattingpost?: Maybe<DeleteLahmanBattingpostPayload>;
  /** Deletes a single `LahmanBattingpost` using a unique key. */
  deleteLahmanBattingpostByPlayerIdAndYearAndRound?: Maybe<DeleteLahmanBattingpostPayload>;
  /** Deletes a single `LahmanFielding` using its globally unique id. */
  deleteLahmanFielding?: Maybe<DeleteLahmanFieldingPayload>;
  /** Deletes a single `LahmanFielding` using a unique key. */
  deleteLahmanFieldingByPlayerIdAndYearAndStintAndPos?: Maybe<DeleteLahmanFieldingPayload>;
  /** Deletes a single `LahmanFieldingpost` using its globally unique id. */
  deleteLahmanFieldingpost?: Maybe<DeleteLahmanFieldingpostPayload>;
  /** Deletes a single `LahmanFieldingpost` using a unique key. */
  deleteLahmanFieldingpostByPlayerIdAndYearAndRoundAndPos?: Maybe<DeleteLahmanFieldingpostPayload>;
  /** Deletes a single `LahmanPark` using its globally unique id. */
  deleteLahmanPark?: Maybe<DeleteLahmanParkPayload>;
  /** Deletes a single `LahmanPark` using a unique key. */
  deleteLahmanParkByParkKey?: Maybe<DeleteLahmanParkPayload>;
  /** Deletes a single `LahmanPerson` using its globally unique id. */
  deleteLahmanPerson?: Maybe<DeleteLahmanPersonPayload>;
  /** Deletes a single `LahmanPerson` using a unique key. */
  deleteLahmanPersonByPlayerId?: Maybe<DeleteLahmanPersonPayload>;
  /** Deletes a single `LahmanPerson` using a unique key. */
  deleteLahmanPersonByRetroId?: Maybe<DeleteLahmanPersonPayload>;
  /** Deletes a single `LahmanPitching` using its globally unique id. */
  deleteLahmanPitching?: Maybe<DeleteLahmanPitchingPayload>;
  /** Deletes a single `LahmanPitching` using a unique key. */
  deleteLahmanPitchingByPlayerIdAndYearAndStint?: Maybe<DeleteLahmanPitchingPayload>;
  /** Deletes a single `LahmanPitchingpost` using its globally unique id. */
  deleteLahmanPitchingpost?: Maybe<DeleteLahmanPitchingpostPayload>;
  /** Deletes a single `LahmanPitchingpost` using a unique key. */
  deleteLahmanPitchingpostByPlayerIdAndYearAndRound?: Maybe<DeleteLahmanPitchingpostPayload>;
  /** Deletes a single `LahmanSalary` using its globally unique id. */
  deleteLahmanSalary?: Maybe<DeleteLahmanSalaryPayload>;
  /** Deletes a single `LahmanSalary` using a unique key. */
  deleteLahmanSalaryByPlayerIdAndYearAndTeamId?: Maybe<DeleteLahmanSalaryPayload>;
  /** Deletes a single `LahmanTeam` using its globally unique id. */
  deleteLahmanTeam?: Maybe<DeleteLahmanTeamPayload>;
  /** Deletes a single `LahmanTeam` using a unique key. */
  deleteLahmanTeamByTeamIdAndYear?: Maybe<DeleteLahmanTeamPayload>;
  /** Deletes a single `LahmanTeam` using a unique key. */
  deleteLahmanTeamByTeamIdRetroAndYear?: Maybe<DeleteLahmanTeamPayload>;
  /** Deletes a single `RetroBatting` using its globally unique id. */
  deleteRetroBatting?: Maybe<DeleteRetroBattingPayload>;
  /** Deletes a single `RetroBatting` using a unique key. */
  deleteRetroBattingByPlayerIdAndGameId?: Maybe<DeleteRetroBattingPayload>;
  /** Deletes a single `RetroEvent` using its globally unique id. */
  deleteRetroEvent?: Maybe<DeleteRetroEventPayload>;
  /** Deletes a single `RetroEvent` using a unique key. */
  deleteRetroEventByGameIdAndEventId?: Maybe<DeleteRetroEventPayload>;
  /** Deletes a single `RetroFielding` using its globally unique id. */
  deleteRetroFielding?: Maybe<DeleteRetroFieldingPayload>;
  /** Deletes a single `RetroFielding` using a unique key. */
  deleteRetroFieldingByPlayerIdAndGameIdAndPos?: Maybe<DeleteRetroFieldingPayload>;
  /** Deletes a single `RetroGame` using its globally unique id. */
  deleteRetroGame?: Maybe<DeleteRetroGamePayload>;
  /** Deletes a single `RetroGame` using a unique key. */
  deleteRetroGameByGameId?: Maybe<DeleteRetroGamePayload>;
  /** Deletes a single `RetroPitching` using its globally unique id. */
  deleteRetroPitching?: Maybe<DeleteRetroPitchingPayload>;
  /** Deletes a single `RetroPitching` using a unique key. */
  deleteRetroPitchingByPlayerIdAndGameId?: Maybe<DeleteRetroPitchingPayload>;
  /** Deletes a single `RetroTeamGame` using its globally unique id. */
  deleteRetroTeamGame?: Maybe<DeleteRetroTeamGamePayload>;
  /** Deletes a single `RetroTeamGame` using a unique key. */
  deleteRetroTeamGameByTeamIdAndGameId?: Maybe<DeleteRetroTeamGamePayload>;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateLahmanBattingArgs = {
  input: CreateLahmanBattingInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateLahmanBattingpostArgs = {
  input: CreateLahmanBattingpostInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateLahmanFieldingArgs = {
  input: CreateLahmanFieldingInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateLahmanFieldingpostArgs = {
  input: CreateLahmanFieldingpostInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateLahmanParkArgs = {
  input: CreateLahmanParkInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateLahmanPersonArgs = {
  input: CreateLahmanPersonInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateLahmanPitchingArgs = {
  input: CreateLahmanPitchingInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateLahmanPitchingpostArgs = {
  input: CreateLahmanPitchingpostInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateLahmanSalaryArgs = {
  input: CreateLahmanSalaryInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateLahmanTeamArgs = {
  input: CreateLahmanTeamInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateRetroBattingArgs = {
  input: CreateRetroBattingInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateRetroEventArgs = {
  input: CreateRetroEventInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateRetroFieldingArgs = {
  input: CreateRetroFieldingInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateRetroGameArgs = {
  input: CreateRetroGameInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateRetroPitchingArgs = {
  input: CreateRetroPitchingInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateRetroTeamGameArgs = {
  input: CreateRetroTeamGameInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateLahmanBattingArgs = {
  input: UpdateLahmanBattingInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateLahmanBattingByPlayerIdAndYearAndStintArgs = {
  input: UpdateLahmanBattingByPlayerIdAndYearAndStintInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateLahmanBattingpostArgs = {
  input: UpdateLahmanBattingpostInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateLahmanBattingpostByPlayerIdAndYearAndRoundArgs = {
  input: UpdateLahmanBattingpostByPlayerIdAndYearAndRoundInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateLahmanFieldingArgs = {
  input: UpdateLahmanFieldingInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateLahmanFieldingByPlayerIdAndYearAndStintAndPosArgs = {
  input: UpdateLahmanFieldingByPlayerIdAndYearAndStintAndPosInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateLahmanFieldingpostArgs = {
  input: UpdateLahmanFieldingpostInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateLahmanFieldingpostByPlayerIdAndYearAndRoundAndPosArgs = {
  input: UpdateLahmanFieldingpostByPlayerIdAndYearAndRoundAndPosInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateLahmanParkArgs = {
  input: UpdateLahmanParkInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateLahmanParkByParkKeyArgs = {
  input: UpdateLahmanParkByParkKeyInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateLahmanPersonArgs = {
  input: UpdateLahmanPersonInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateLahmanPersonByPlayerIdArgs = {
  input: UpdateLahmanPersonByPlayerIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateLahmanPersonByRetroIdArgs = {
  input: UpdateLahmanPersonByRetroIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateLahmanPitchingArgs = {
  input: UpdateLahmanPitchingInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateLahmanPitchingByPlayerIdAndYearAndStintArgs = {
  input: UpdateLahmanPitchingByPlayerIdAndYearAndStintInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateLahmanPitchingpostArgs = {
  input: UpdateLahmanPitchingpostInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateLahmanPitchingpostByPlayerIdAndYearAndRoundArgs = {
  input: UpdateLahmanPitchingpostByPlayerIdAndYearAndRoundInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateLahmanSalaryArgs = {
  input: UpdateLahmanSalaryInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateLahmanSalaryByPlayerIdAndYearAndTeamIdArgs = {
  input: UpdateLahmanSalaryByPlayerIdAndYearAndTeamIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateLahmanTeamArgs = {
  input: UpdateLahmanTeamInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateLahmanTeamByTeamIdAndYearArgs = {
  input: UpdateLahmanTeamByTeamIdAndYearInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateLahmanTeamByTeamIdRetroAndYearArgs = {
  input: UpdateLahmanTeamByTeamIdRetroAndYearInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateRetroBattingArgs = {
  input: UpdateRetroBattingInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateRetroBattingByPlayerIdAndGameIdArgs = {
  input: UpdateRetroBattingByPlayerIdAndGameIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateRetroEventArgs = {
  input: UpdateRetroEventInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateRetroEventByGameIdAndEventIdArgs = {
  input: UpdateRetroEventByGameIdAndEventIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateRetroFieldingArgs = {
  input: UpdateRetroFieldingInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateRetroFieldingByPlayerIdAndGameIdAndPosArgs = {
  input: UpdateRetroFieldingByPlayerIdAndGameIdAndPosInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateRetroGameArgs = {
  input: UpdateRetroGameInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateRetroGameByGameIdArgs = {
  input: UpdateRetroGameByGameIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateRetroPitchingArgs = {
  input: UpdateRetroPitchingInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateRetroPitchingByPlayerIdAndGameIdArgs = {
  input: UpdateRetroPitchingByPlayerIdAndGameIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateRetroTeamGameArgs = {
  input: UpdateRetroTeamGameInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateRetroTeamGameByTeamIdAndGameIdArgs = {
  input: UpdateRetroTeamGameByTeamIdAndGameIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteLahmanBattingArgs = {
  input: DeleteLahmanBattingInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteLahmanBattingByPlayerIdAndYearAndStintArgs = {
  input: DeleteLahmanBattingByPlayerIdAndYearAndStintInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteLahmanBattingpostArgs = {
  input: DeleteLahmanBattingpostInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteLahmanBattingpostByPlayerIdAndYearAndRoundArgs = {
  input: DeleteLahmanBattingpostByPlayerIdAndYearAndRoundInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteLahmanFieldingArgs = {
  input: DeleteLahmanFieldingInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteLahmanFieldingByPlayerIdAndYearAndStintAndPosArgs = {
  input: DeleteLahmanFieldingByPlayerIdAndYearAndStintAndPosInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteLahmanFieldingpostArgs = {
  input: DeleteLahmanFieldingpostInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteLahmanFieldingpostByPlayerIdAndYearAndRoundAndPosArgs = {
  input: DeleteLahmanFieldingpostByPlayerIdAndYearAndRoundAndPosInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteLahmanParkArgs = {
  input: DeleteLahmanParkInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteLahmanParkByParkKeyArgs = {
  input: DeleteLahmanParkByParkKeyInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteLahmanPersonArgs = {
  input: DeleteLahmanPersonInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteLahmanPersonByPlayerIdArgs = {
  input: DeleteLahmanPersonByPlayerIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteLahmanPersonByRetroIdArgs = {
  input: DeleteLahmanPersonByRetroIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteLahmanPitchingArgs = {
  input: DeleteLahmanPitchingInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteLahmanPitchingByPlayerIdAndYearAndStintArgs = {
  input: DeleteLahmanPitchingByPlayerIdAndYearAndStintInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteLahmanPitchingpostArgs = {
  input: DeleteLahmanPitchingpostInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteLahmanPitchingpostByPlayerIdAndYearAndRoundArgs = {
  input: DeleteLahmanPitchingpostByPlayerIdAndYearAndRoundInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteLahmanSalaryArgs = {
  input: DeleteLahmanSalaryInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteLahmanSalaryByPlayerIdAndYearAndTeamIdArgs = {
  input: DeleteLahmanSalaryByPlayerIdAndYearAndTeamIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteLahmanTeamArgs = {
  input: DeleteLahmanTeamInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteLahmanTeamByTeamIdAndYearArgs = {
  input: DeleteLahmanTeamByTeamIdAndYearInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteLahmanTeamByTeamIdRetroAndYearArgs = {
  input: DeleteLahmanTeamByTeamIdRetroAndYearInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteRetroBattingArgs = {
  input: DeleteRetroBattingInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteRetroBattingByPlayerIdAndGameIdArgs = {
  input: DeleteRetroBattingByPlayerIdAndGameIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteRetroEventArgs = {
  input: DeleteRetroEventInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteRetroEventByGameIdAndEventIdArgs = {
  input: DeleteRetroEventByGameIdAndEventIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteRetroFieldingArgs = {
  input: DeleteRetroFieldingInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteRetroFieldingByPlayerIdAndGameIdAndPosArgs = {
  input: DeleteRetroFieldingByPlayerIdAndGameIdAndPosInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteRetroGameArgs = {
  input: DeleteRetroGameInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteRetroGameByGameIdArgs = {
  input: DeleteRetroGameByGameIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteRetroPitchingArgs = {
  input: DeleteRetroPitchingInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteRetroPitchingByPlayerIdAndGameIdArgs = {
  input: DeleteRetroPitchingByPlayerIdAndGameIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteRetroTeamGameArgs = {
  input: DeleteRetroTeamGameInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteRetroTeamGameByTeamIdAndGameIdArgs = {
  input: DeleteRetroTeamGameByTeamIdAndGameIdInput;
};

/** An object with a globally unique `ID`. */
export type Node = {
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['Cursor']>;
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['Cursor']>;
};

/** The root query type which gives access points into the data universe. */
export type Query = Node & {
  __typename?: 'Query';
  /**
   * Exposes the root query type nested one level down. This is helpful for Relay 1
   * which can only query top level fields if they are in a particular form.
   */
  query: Query;
  /** The root query type must be a `Node` to work well with Relay 1 mutations. This just resolves to `query`. */
  nodeId: Scalars['ID'];
  /** Fetches an object given its globally unique `ID`. */
  node?: Maybe<Node>;
  /** Reads and enables pagination through a set of `LahmanBatting`. */
  allLahmanBattings?: Maybe<LahmanBattingsConnection>;
  /** Reads and enables pagination through a set of `LahmanBattingpost`. */
  allLahmanBattingposts?: Maybe<LahmanBattingpostsConnection>;
  /** Reads and enables pagination through a set of `LahmanFielding`. */
  allLahmanFieldings?: Maybe<LahmanFieldingsConnection>;
  /** Reads and enables pagination through a set of `LahmanFieldingpost`. */
  allLahmanFieldingposts?: Maybe<LahmanFieldingpostsConnection>;
  /** Reads and enables pagination through a set of `LahmanPark`. */
  allLahmanParks?: Maybe<LahmanParksConnection>;
  /** Reads and enables pagination through a set of `LahmanPerson`. */
  allLahmanPeople?: Maybe<LahmanPeopleConnection>;
  /** Reads and enables pagination through a set of `LahmanPitching`. */
  allLahmanPitchings?: Maybe<LahmanPitchingsConnection>;
  /** Reads and enables pagination through a set of `LahmanPitchingpost`. */
  allLahmanPitchingposts?: Maybe<LahmanPitchingpostsConnection>;
  /** Reads and enables pagination through a set of `LahmanSalary`. */
  allLahmanSalaries?: Maybe<LahmanSalariesConnection>;
  /** Reads and enables pagination through a set of `LahmanTeam`. */
  allLahmanTeams?: Maybe<LahmanTeamsConnection>;
  /** Reads and enables pagination through a set of `RetroBatting`. */
  allRetroBattings?: Maybe<RetroBattingsConnection>;
  /** Reads and enables pagination through a set of `RetroEvent`. */
  allRetroEvents?: Maybe<RetroEventsConnection>;
  /** Reads and enables pagination through a set of `RetroFielding`. */
  allRetroFieldings?: Maybe<RetroFieldingsConnection>;
  /** Reads and enables pagination through a set of `RetroGame`. */
  allRetroGames?: Maybe<RetroGamesConnection>;
  /** Reads and enables pagination through a set of `RetroPitching`. */
  allRetroPitchings?: Maybe<RetroPitchingsConnection>;
  /** Reads and enables pagination through a set of `RetroTeamGame`. */
  allRetroTeamGames?: Maybe<RetroTeamGamesConnection>;
  lahmanBattingByPlayerIdAndYearAndStint?: Maybe<LahmanBatting>;
  lahmanBattingpostByPlayerIdAndYearAndRound?: Maybe<LahmanBattingpost>;
  lahmanFieldingByPlayerIdAndYearAndStintAndPos?: Maybe<LahmanFielding>;
  lahmanFieldingpostByPlayerIdAndYearAndRoundAndPos?: Maybe<LahmanFieldingpost>;
  lahmanParkByParkKey?: Maybe<LahmanPark>;
  lahmanPersonByPlayerId?: Maybe<LahmanPerson>;
  lahmanPersonByRetroId?: Maybe<LahmanPerson>;
  lahmanPitchingByPlayerIdAndYearAndStint?: Maybe<LahmanPitching>;
  lahmanPitchingpostByPlayerIdAndYearAndRound?: Maybe<LahmanPitchingpost>;
  lahmanSalaryByPlayerIdAndYearAndTeamId?: Maybe<LahmanSalary>;
  lahmanTeamByTeamIdAndYear?: Maybe<LahmanTeam>;
  lahmanTeamByTeamIdRetroAndYear?: Maybe<LahmanTeam>;
  retroBattingByPlayerIdAndGameId?: Maybe<RetroBatting>;
  retroEventByGameIdAndEventId?: Maybe<RetroEvent>;
  retroFieldingByPlayerIdAndGameIdAndPos?: Maybe<RetroFielding>;
  retroGameByGameId?: Maybe<RetroGame>;
  retroPitchingByPlayerIdAndGameId?: Maybe<RetroPitching>;
  retroTeamGameByTeamIdAndGameId?: Maybe<RetroTeamGame>;
  /** Reads a single `LahmanBatting` using its globally unique `ID`. */
  lahmanBatting?: Maybe<LahmanBatting>;
  /** Reads a single `LahmanBattingpost` using its globally unique `ID`. */
  lahmanBattingpost?: Maybe<LahmanBattingpost>;
  /** Reads a single `LahmanFielding` using its globally unique `ID`. */
  lahmanFielding?: Maybe<LahmanFielding>;
  /** Reads a single `LahmanFieldingpost` using its globally unique `ID`. */
  lahmanFieldingpost?: Maybe<LahmanFieldingpost>;
  /** Reads a single `LahmanPark` using its globally unique `ID`. */
  lahmanPark?: Maybe<LahmanPark>;
  /** Reads a single `LahmanPerson` using its globally unique `ID`. */
  lahmanPerson?: Maybe<LahmanPerson>;
  /** Reads a single `LahmanPitching` using its globally unique `ID`. */
  lahmanPitching?: Maybe<LahmanPitching>;
  /** Reads a single `LahmanPitchingpost` using its globally unique `ID`. */
  lahmanPitchingpost?: Maybe<LahmanPitchingpost>;
  /** Reads a single `LahmanSalary` using its globally unique `ID`. */
  lahmanSalary?: Maybe<LahmanSalary>;
  /** Reads a single `LahmanTeam` using its globally unique `ID`. */
  lahmanTeam?: Maybe<LahmanTeam>;
  /** Reads a single `RetroBatting` using its globally unique `ID`. */
  retroBatting?: Maybe<RetroBatting>;
  /** Reads a single `RetroEvent` using its globally unique `ID`. */
  retroEvent?: Maybe<RetroEvent>;
  /** Reads a single `RetroFielding` using its globally unique `ID`. */
  retroFielding?: Maybe<RetroFielding>;
  /** Reads a single `RetroGame` using its globally unique `ID`. */
  retroGame?: Maybe<RetroGame>;
  /** Reads a single `RetroPitching` using its globally unique `ID`. */
  retroPitching?: Maybe<RetroPitching>;
  /** Reads a single `RetroTeamGame` using its globally unique `ID`. */
  retroTeamGame?: Maybe<RetroTeamGame>;
};


/** The root query type which gives access points into the data universe. */
export type QueryNodeArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryAllLahmanBattingsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<LahmanBattingsOrderBy>>;
  condition?: Maybe<LahmanBattingCondition>;
  filter?: Maybe<LahmanBattingFilter>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllLahmanBattingpostsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<LahmanBattingpostsOrderBy>>;
  condition?: Maybe<LahmanBattingpostCondition>;
  filter?: Maybe<LahmanBattingpostFilter>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllLahmanFieldingsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<LahmanFieldingsOrderBy>>;
  condition?: Maybe<LahmanFieldingCondition>;
  filter?: Maybe<LahmanFieldingFilter>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllLahmanFieldingpostsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<LahmanFieldingpostsOrderBy>>;
  condition?: Maybe<LahmanFieldingpostCondition>;
  filter?: Maybe<LahmanFieldingpostFilter>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllLahmanParksArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<LahmanParksOrderBy>>;
  condition?: Maybe<LahmanParkCondition>;
  filter?: Maybe<LahmanParkFilter>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllLahmanPeopleArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<LahmanPeopleOrderBy>>;
  condition?: Maybe<LahmanPersonCondition>;
  filter?: Maybe<LahmanPersonFilter>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllLahmanPitchingsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<LahmanPitchingsOrderBy>>;
  condition?: Maybe<LahmanPitchingCondition>;
  filter?: Maybe<LahmanPitchingFilter>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllLahmanPitchingpostsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<LahmanPitchingpostsOrderBy>>;
  condition?: Maybe<LahmanPitchingpostCondition>;
  filter?: Maybe<LahmanPitchingpostFilter>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllLahmanSalariesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<LahmanSalariesOrderBy>>;
  condition?: Maybe<LahmanSalaryCondition>;
  filter?: Maybe<LahmanSalaryFilter>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllLahmanTeamsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<LahmanTeamsOrderBy>>;
  condition?: Maybe<LahmanTeamCondition>;
  filter?: Maybe<LahmanTeamFilter>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllRetroBattingsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<RetroBattingsOrderBy>>;
  condition?: Maybe<RetroBattingCondition>;
  filter?: Maybe<RetroBattingFilter>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllRetroEventsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<RetroEventsOrderBy>>;
  condition?: Maybe<RetroEventCondition>;
  filter?: Maybe<RetroEventFilter>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllRetroFieldingsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<RetroFieldingsOrderBy>>;
  condition?: Maybe<RetroFieldingCondition>;
  filter?: Maybe<RetroFieldingFilter>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllRetroGamesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<RetroGamesOrderBy>>;
  condition?: Maybe<RetroGameCondition>;
  filter?: Maybe<RetroGameFilter>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllRetroPitchingsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<RetroPitchingsOrderBy>>;
  condition?: Maybe<RetroPitchingCondition>;
  filter?: Maybe<RetroPitchingFilter>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllRetroTeamGamesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<RetroTeamGamesOrderBy>>;
  condition?: Maybe<RetroTeamGameCondition>;
  filter?: Maybe<RetroTeamGameFilter>;
};


/** The root query type which gives access points into the data universe. */
export type QueryLahmanBattingByPlayerIdAndYearAndStintArgs = {
  playerId: Scalars['String'];
  year: Scalars['Int'];
  stint: Scalars['Int'];
};


/** The root query type which gives access points into the data universe. */
export type QueryLahmanBattingpostByPlayerIdAndYearAndRoundArgs = {
  playerId: Scalars['String'];
  year: Scalars['Int'];
  round: Scalars['String'];
};


/** The root query type which gives access points into the data universe. */
export type QueryLahmanFieldingByPlayerIdAndYearAndStintAndPosArgs = {
  playerId: Scalars['String'];
  year: Scalars['Int'];
  stint: Scalars['Int'];
  pos: Scalars['String'];
};


/** The root query type which gives access points into the data universe. */
export type QueryLahmanFieldingpostByPlayerIdAndYearAndRoundAndPosArgs = {
  playerId: Scalars['String'];
  year: Scalars['Int'];
  round: Scalars['String'];
  pos: Scalars['String'];
};


/** The root query type which gives access points into the data universe. */
export type QueryLahmanParkByParkKeyArgs = {
  parkKey: Scalars['String'];
};


/** The root query type which gives access points into the data universe. */
export type QueryLahmanPersonByPlayerIdArgs = {
  playerId: Scalars['String'];
};


/** The root query type which gives access points into the data universe. */
export type QueryLahmanPersonByRetroIdArgs = {
  retroId: Scalars['String'];
};


/** The root query type which gives access points into the data universe. */
export type QueryLahmanPitchingByPlayerIdAndYearAndStintArgs = {
  playerId: Scalars['String'];
  year: Scalars['Int'];
  stint: Scalars['Int'];
};


/** The root query type which gives access points into the data universe. */
export type QueryLahmanPitchingpostByPlayerIdAndYearAndRoundArgs = {
  playerId: Scalars['String'];
  year: Scalars['Int'];
  round: Scalars['String'];
};


/** The root query type which gives access points into the data universe. */
export type QueryLahmanSalaryByPlayerIdAndYearAndTeamIdArgs = {
  playerId: Scalars['String'];
  year: Scalars['Int'];
  teamId: Scalars['String'];
};


/** The root query type which gives access points into the data universe. */
export type QueryLahmanTeamByTeamIdAndYearArgs = {
  teamId: Scalars['String'];
  year: Scalars['Int'];
};


/** The root query type which gives access points into the data universe. */
export type QueryLahmanTeamByTeamIdRetroAndYearArgs = {
  teamIdRetro: Scalars['String'];
  year: Scalars['Int'];
};


/** The root query type which gives access points into the data universe. */
export type QueryRetroBattingByPlayerIdAndGameIdArgs = {
  playerId: Scalars['String'];
  gameId: Scalars['String'];
};


/** The root query type which gives access points into the data universe. */
export type QueryRetroEventByGameIdAndEventIdArgs = {
  gameId: Scalars['String'];
  eventId: Scalars['Int'];
};


/** The root query type which gives access points into the data universe. */
export type QueryRetroFieldingByPlayerIdAndGameIdAndPosArgs = {
  playerId: Scalars['String'];
  gameId: Scalars['String'];
  pos: Scalars['String'];
};


/** The root query type which gives access points into the data universe. */
export type QueryRetroGameByGameIdArgs = {
  gameId: Scalars['String'];
};


/** The root query type which gives access points into the data universe. */
export type QueryRetroPitchingByPlayerIdAndGameIdArgs = {
  playerId: Scalars['String'];
  gameId: Scalars['String'];
};


/** The root query type which gives access points into the data universe. */
export type QueryRetroTeamGameByTeamIdAndGameIdArgs = {
  teamId: Scalars['String'];
  gameId: Scalars['String'];
};


/** The root query type which gives access points into the data universe. */
export type QueryLahmanBattingArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryLahmanBattingpostArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryLahmanFieldingArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryLahmanFieldingpostArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryLahmanParkArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryLahmanPersonArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryLahmanPitchingArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryLahmanPitchingpostArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryLahmanSalaryArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryLahmanTeamArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryRetroBattingArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryRetroEventArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryRetroFieldingArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryRetroGameArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryRetroPitchingArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryRetroTeamGameArgs = {
  nodeId: Scalars['ID'];
};

export type RetroBatting = Node & {
  __typename?: 'RetroBatting';
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  gameId: Scalars['String'];
  playerId: Scalars['String'];
  teamId?: Maybe<Scalars['String']>;
  g?: Maybe<Scalars['Int']>;
  pa?: Maybe<Scalars['Int']>;
  ab?: Maybe<Scalars['Int']>;
  r?: Maybe<Scalars['Int']>;
  h?: Maybe<Scalars['Int']>;
  tb?: Maybe<Scalars['Int']>;
  double?: Maybe<Scalars['Int']>;
  triple?: Maybe<Scalars['Int']>;
  hr?: Maybe<Scalars['Int']>;
  hr4?: Maybe<Scalars['Int']>;
  rbi?: Maybe<Scalars['Int']>;
  bb?: Maybe<Scalars['Int']>;
  ibb?: Maybe<Scalars['Int']>;
  so?: Maybe<Scalars['Int']>;
  gidp?: Maybe<Scalars['Int']>;
  hbp?: Maybe<Scalars['Int']>;
  sh?: Maybe<Scalars['Int']>;
  sf?: Maybe<Scalars['Int']>;
  sb?: Maybe<Scalars['Int']>;
  cs?: Maybe<Scalars['Int']>;
  xi?: Maybe<Scalars['Int']>;
  gDh?: Maybe<Scalars['Int']>;
  gPh?: Maybe<Scalars['Int']>;
  gPr?: Maybe<Scalars['Int']>;
  gameStart?: Maybe<Scalars['Datetime']>;
  year?: Maybe<Scalars['Int']>;
  /** Reads a single `LahmanPerson` that is related to this `RetroBatting`. */
  lahmanPersonByPlayerId?: Maybe<LahmanPerson>;
};

/**
 * A condition to be used against `RetroBatting` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type RetroBattingCondition = {
  /** Checks for equality with the object’s `gameId` field. */
  gameId?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `playerId` field. */
  playerId?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `teamId` field. */
  teamId?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `g` field. */
  g?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `pa` field. */
  pa?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `ab` field. */
  ab?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `r` field. */
  r?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `h` field. */
  h?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `tb` field. */
  tb?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `double` field. */
  double?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `triple` field. */
  triple?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `hr` field. */
  hr?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `hr4` field. */
  hr4?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `rbi` field. */
  rbi?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `bb` field. */
  bb?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `ibb` field. */
  ibb?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `so` field. */
  so?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `gidp` field. */
  gidp?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `hbp` field. */
  hbp?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `sh` field. */
  sh?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `sf` field. */
  sf?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `sb` field. */
  sb?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `cs` field. */
  cs?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `xi` field. */
  xi?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `gDh` field. */
  gDh?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `gPh` field. */
  gPh?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `gPr` field. */
  gPr?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `gameStart` field. */
  gameStart?: Maybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `year` field. */
  year?: Maybe<Scalars['Int']>;
};

/** A filter to be used against `RetroBatting` object types. All fields are combined with a logical ‘and.’ */
export type RetroBattingFilter = {
  /** Filter by the object’s `gameId` field. */
  gameId?: Maybe<StringFilter>;
  /** Filter by the object’s `playerId` field. */
  playerId?: Maybe<StringFilter>;
  /** Filter by the object’s `teamId` field. */
  teamId?: Maybe<StringFilter>;
  /** Filter by the object’s `g` field. */
  g?: Maybe<IntFilter>;
  /** Filter by the object’s `pa` field. */
  pa?: Maybe<IntFilter>;
  /** Filter by the object’s `ab` field. */
  ab?: Maybe<IntFilter>;
  /** Filter by the object’s `r` field. */
  r?: Maybe<IntFilter>;
  /** Filter by the object’s `h` field. */
  h?: Maybe<IntFilter>;
  /** Filter by the object’s `tb` field. */
  tb?: Maybe<IntFilter>;
  /** Filter by the object’s `double` field. */
  double?: Maybe<IntFilter>;
  /** Filter by the object’s `triple` field. */
  triple?: Maybe<IntFilter>;
  /** Filter by the object’s `hr` field. */
  hr?: Maybe<IntFilter>;
  /** Filter by the object’s `hr4` field. */
  hr4?: Maybe<IntFilter>;
  /** Filter by the object’s `rbi` field. */
  rbi?: Maybe<IntFilter>;
  /** Filter by the object’s `bb` field. */
  bb?: Maybe<IntFilter>;
  /** Filter by the object’s `ibb` field. */
  ibb?: Maybe<IntFilter>;
  /** Filter by the object’s `so` field. */
  so?: Maybe<IntFilter>;
  /** Filter by the object’s `gidp` field. */
  gidp?: Maybe<IntFilter>;
  /** Filter by the object’s `hbp` field. */
  hbp?: Maybe<IntFilter>;
  /** Filter by the object’s `sh` field. */
  sh?: Maybe<IntFilter>;
  /** Filter by the object’s `sf` field. */
  sf?: Maybe<IntFilter>;
  /** Filter by the object’s `sb` field. */
  sb?: Maybe<IntFilter>;
  /** Filter by the object’s `cs` field. */
  cs?: Maybe<IntFilter>;
  /** Filter by the object’s `xi` field. */
  xi?: Maybe<IntFilter>;
  /** Filter by the object’s `gDh` field. */
  gDh?: Maybe<IntFilter>;
  /** Filter by the object’s `gPh` field. */
  gPh?: Maybe<IntFilter>;
  /** Filter by the object’s `gPr` field. */
  gPr?: Maybe<IntFilter>;
  /** Filter by the object’s `gameStart` field. */
  gameStart?: Maybe<DatetimeFilter>;
  /** Filter by the object’s `year` field. */
  year?: Maybe<IntFilter>;
  /** Checks for all expressions in this list. */
  and?: Maybe<Array<RetroBattingFilter>>;
  /** Checks for any expressions in this list. */
  or?: Maybe<Array<RetroBattingFilter>>;
  /** Negates the expression. */
  not?: Maybe<RetroBattingFilter>;
};

/** An input for mutations affecting `RetroBatting` */
export type RetroBattingInput = {
  gameId: Scalars['String'];
  playerId: Scalars['String'];
  teamId?: Maybe<Scalars['String']>;
  g?: Maybe<Scalars['Int']>;
  pa?: Maybe<Scalars['Int']>;
  ab?: Maybe<Scalars['Int']>;
  r?: Maybe<Scalars['Int']>;
  h?: Maybe<Scalars['Int']>;
  tb?: Maybe<Scalars['Int']>;
  double?: Maybe<Scalars['Int']>;
  triple?: Maybe<Scalars['Int']>;
  hr?: Maybe<Scalars['Int']>;
  hr4?: Maybe<Scalars['Int']>;
  rbi?: Maybe<Scalars['Int']>;
  bb?: Maybe<Scalars['Int']>;
  ibb?: Maybe<Scalars['Int']>;
  so?: Maybe<Scalars['Int']>;
  gidp?: Maybe<Scalars['Int']>;
  hbp?: Maybe<Scalars['Int']>;
  sh?: Maybe<Scalars['Int']>;
  sf?: Maybe<Scalars['Int']>;
  sb?: Maybe<Scalars['Int']>;
  cs?: Maybe<Scalars['Int']>;
  xi?: Maybe<Scalars['Int']>;
  gDh?: Maybe<Scalars['Int']>;
  gPh?: Maybe<Scalars['Int']>;
  gPr?: Maybe<Scalars['Int']>;
  gameStart?: Maybe<Scalars['Datetime']>;
  year?: Maybe<Scalars['Int']>;
};

/** Represents an update to a `RetroBatting`. Fields that are set will be updated. */
export type RetroBattingPatch = {
  gameId?: Maybe<Scalars['String']>;
  playerId?: Maybe<Scalars['String']>;
  teamId?: Maybe<Scalars['String']>;
  g?: Maybe<Scalars['Int']>;
  pa?: Maybe<Scalars['Int']>;
  ab?: Maybe<Scalars['Int']>;
  r?: Maybe<Scalars['Int']>;
  h?: Maybe<Scalars['Int']>;
  tb?: Maybe<Scalars['Int']>;
  double?: Maybe<Scalars['Int']>;
  triple?: Maybe<Scalars['Int']>;
  hr?: Maybe<Scalars['Int']>;
  hr4?: Maybe<Scalars['Int']>;
  rbi?: Maybe<Scalars['Int']>;
  bb?: Maybe<Scalars['Int']>;
  ibb?: Maybe<Scalars['Int']>;
  so?: Maybe<Scalars['Int']>;
  gidp?: Maybe<Scalars['Int']>;
  hbp?: Maybe<Scalars['Int']>;
  sh?: Maybe<Scalars['Int']>;
  sf?: Maybe<Scalars['Int']>;
  sb?: Maybe<Scalars['Int']>;
  cs?: Maybe<Scalars['Int']>;
  xi?: Maybe<Scalars['Int']>;
  gDh?: Maybe<Scalars['Int']>;
  gPh?: Maybe<Scalars['Int']>;
  gPr?: Maybe<Scalars['Int']>;
  gameStart?: Maybe<Scalars['Datetime']>;
  year?: Maybe<Scalars['Int']>;
};

/** A connection to a list of `RetroBatting` values. */
export type RetroBattingsConnection = {
  __typename?: 'RetroBattingsConnection';
  /** A list of `RetroBatting` objects. */
  nodes: Array<Maybe<RetroBatting>>;
  /** A list of edges which contains the `RetroBatting` and cursor to aid in pagination. */
  edges: Array<RetroBattingsEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `RetroBatting` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `RetroBatting` edge in the connection. */
export type RetroBattingsEdge = {
  __typename?: 'RetroBattingsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `RetroBatting` at the end of the edge. */
  node?: Maybe<RetroBatting>;
};

/** Methods to use when ordering `RetroBatting`. */
export enum RetroBattingsOrderBy {
  Natural = 'NATURAL',
  GameIdAsc = 'GAME_ID_ASC',
  GameIdDesc = 'GAME_ID_DESC',
  PlayerIdAsc = 'PLAYER_ID_ASC',
  PlayerIdDesc = 'PLAYER_ID_DESC',
  TeamIdAsc = 'TEAM_ID_ASC',
  TeamIdDesc = 'TEAM_ID_DESC',
  GAsc = 'G_ASC',
  GDesc = 'G_DESC',
  PaAsc = 'PA_ASC',
  PaDesc = 'PA_DESC',
  AbAsc = 'AB_ASC',
  AbDesc = 'AB_DESC',
  RAsc = 'R_ASC',
  RDesc = 'R_DESC',
  HAsc = 'H_ASC',
  HDesc = 'H_DESC',
  TbAsc = 'TB_ASC',
  TbDesc = 'TB_DESC',
  DoubleAsc = 'DOUBLE_ASC',
  DoubleDesc = 'DOUBLE_DESC',
  TripleAsc = 'TRIPLE_ASC',
  TripleDesc = 'TRIPLE_DESC',
  HrAsc = 'HR_ASC',
  HrDesc = 'HR_DESC',
  Hr4Asc = 'HR4_ASC',
  Hr4Desc = 'HR4_DESC',
  RbiAsc = 'RBI_ASC',
  RbiDesc = 'RBI_DESC',
  BbAsc = 'BB_ASC',
  BbDesc = 'BB_DESC',
  IbbAsc = 'IBB_ASC',
  IbbDesc = 'IBB_DESC',
  SoAsc = 'SO_ASC',
  SoDesc = 'SO_DESC',
  GidpAsc = 'GIDP_ASC',
  GidpDesc = 'GIDP_DESC',
  HbpAsc = 'HBP_ASC',
  HbpDesc = 'HBP_DESC',
  ShAsc = 'SH_ASC',
  ShDesc = 'SH_DESC',
  SfAsc = 'SF_ASC',
  SfDesc = 'SF_DESC',
  SbAsc = 'SB_ASC',
  SbDesc = 'SB_DESC',
  CsAsc = 'CS_ASC',
  CsDesc = 'CS_DESC',
  XiAsc = 'XI_ASC',
  XiDesc = 'XI_DESC',
  GDhAsc = 'G_DH_ASC',
  GDhDesc = 'G_DH_DESC',
  GPhAsc = 'G_PH_ASC',
  GPhDesc = 'G_PH_DESC',
  GPrAsc = 'G_PR_ASC',
  GPrDesc = 'G_PR_DESC',
  GameStartAsc = 'GAME_START_ASC',
  GameStartDesc = 'GAME_START_DESC',
  YearAsc = 'YEAR_ASC',
  YearDesc = 'YEAR_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

export type RetroEvent = Node & {
  __typename?: 'RetroEvent';
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  gameId: Scalars['String'];
  innCt?: Maybe<Scalars['Int']>;
  homeHalf?: Maybe<Scalars['Int']>;
  awayScoreCt?: Maybe<Scalars['Int']>;
  homeScoreCt?: Maybe<Scalars['Int']>;
  batId?: Maybe<Scalars['String']>;
  pitId?: Maybe<Scalars['String']>;
  eventTx?: Maybe<Scalars['String']>;
  hCd?: Maybe<Scalars['Int']>;
  outs?: Maybe<Scalars['Int']>;
  e?: Maybe<Scalars['Int']>;
  eventId: Scalars['Int'];
  teamId?: Maybe<Scalars['String']>;
  opponentTeamId?: Maybe<Scalars['String']>;
  innRunsCt?: Maybe<Scalars['Int']>;
  startBasesCd?: Maybe<Scalars['Int']>;
  endBasesCd?: Maybe<Scalars['Int']>;
  r?: Maybe<Scalars['Int']>;
  fateRunsCt?: Maybe<Scalars['Int']>;
  ab?: Maybe<Scalars['Boolean']>;
  sh?: Maybe<Scalars['Boolean']>;
  sf?: Maybe<Scalars['Boolean']>;
  dp?: Maybe<Scalars['Boolean']>;
  tp?: Maybe<Scalars['Boolean']>;
  wp?: Maybe<Scalars['Boolean']>;
  pb?: Maybe<Scalars['Boolean']>;
  innEnd?: Maybe<Scalars['Boolean']>;
  pa?: Maybe<Scalars['Boolean']>;
  batSafeErr?: Maybe<Scalars['Boolean']>;
  so?: Maybe<Scalars['Boolean']>;
  sb?: Maybe<Scalars['Int']>;
  cs?: Maybe<Scalars['Int']>;
  bk?: Maybe<Scalars['Boolean']>;
  ibb?: Maybe<Scalars['Boolean']>;
  bb?: Maybe<Scalars['Boolean']>;
  hbp?: Maybe<Scalars['Boolean']>;
  xi?: Maybe<Scalars['Boolean']>;
  single?: Maybe<Scalars['Boolean']>;
  double?: Maybe<Scalars['Boolean']>;
  triple?: Maybe<Scalars['Boolean']>;
  hr?: Maybe<Scalars['Boolean']>;
  h?: Maybe<Scalars['Boolean']>;
  /** Reads a single `RetroGame` that is related to this `RetroEvent`. */
  retroGameByGameId?: Maybe<RetroGame>;
  /** Reads a single `LahmanPerson` that is related to this `RetroEvent`. */
  lahmanPersonByBatId?: Maybe<LahmanPerson>;
  /** Reads a single `LahmanPerson` that is related to this `RetroEvent`. */
  lahmanPersonByPitId?: Maybe<LahmanPerson>;
};

/**
 * A condition to be used against `RetroEvent` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type RetroEventCondition = {
  /** Checks for equality with the object’s `gameId` field. */
  gameId?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `innCt` field. */
  innCt?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `homeHalf` field. */
  homeHalf?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `awayScoreCt` field. */
  awayScoreCt?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `homeScoreCt` field. */
  homeScoreCt?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `batId` field. */
  batId?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `pitId` field. */
  pitId?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `eventTx` field. */
  eventTx?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `hCd` field. */
  hCd?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `outs` field. */
  outs?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `e` field. */
  e?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `eventId` field. */
  eventId?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `teamId` field. */
  teamId?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `opponentTeamId` field. */
  opponentTeamId?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `innRunsCt` field. */
  innRunsCt?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `startBasesCd` field. */
  startBasesCd?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `endBasesCd` field. */
  endBasesCd?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `r` field. */
  r?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `fateRunsCt` field. */
  fateRunsCt?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `ab` field. */
  ab?: Maybe<Scalars['Boolean']>;
  /** Checks for equality with the object’s `sh` field. */
  sh?: Maybe<Scalars['Boolean']>;
  /** Checks for equality with the object’s `sf` field. */
  sf?: Maybe<Scalars['Boolean']>;
  /** Checks for equality with the object’s `dp` field. */
  dp?: Maybe<Scalars['Boolean']>;
  /** Checks for equality with the object’s `tp` field. */
  tp?: Maybe<Scalars['Boolean']>;
  /** Checks for equality with the object’s `wp` field. */
  wp?: Maybe<Scalars['Boolean']>;
  /** Checks for equality with the object’s `pb` field. */
  pb?: Maybe<Scalars['Boolean']>;
  /** Checks for equality with the object’s `innEnd` field. */
  innEnd?: Maybe<Scalars['Boolean']>;
  /** Checks for equality with the object’s `pa` field. */
  pa?: Maybe<Scalars['Boolean']>;
  /** Checks for equality with the object’s `batSafeErr` field. */
  batSafeErr?: Maybe<Scalars['Boolean']>;
  /** Checks for equality with the object’s `so` field. */
  so?: Maybe<Scalars['Boolean']>;
  /** Checks for equality with the object’s `sb` field. */
  sb?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `cs` field. */
  cs?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `bk` field. */
  bk?: Maybe<Scalars['Boolean']>;
  /** Checks for equality with the object’s `ibb` field. */
  ibb?: Maybe<Scalars['Boolean']>;
  /** Checks for equality with the object’s `bb` field. */
  bb?: Maybe<Scalars['Boolean']>;
  /** Checks for equality with the object’s `hbp` field. */
  hbp?: Maybe<Scalars['Boolean']>;
  /** Checks for equality with the object’s `xi` field. */
  xi?: Maybe<Scalars['Boolean']>;
  /** Checks for equality with the object’s `single` field. */
  single?: Maybe<Scalars['Boolean']>;
  /** Checks for equality with the object’s `double` field. */
  double?: Maybe<Scalars['Boolean']>;
  /** Checks for equality with the object’s `triple` field. */
  triple?: Maybe<Scalars['Boolean']>;
  /** Checks for equality with the object’s `hr` field. */
  hr?: Maybe<Scalars['Boolean']>;
  /** Checks for equality with the object’s `h` field. */
  h?: Maybe<Scalars['Boolean']>;
};

/** A filter to be used against `RetroEvent` object types. All fields are combined with a logical ‘and.’ */
export type RetroEventFilter = {
  /** Filter by the object’s `gameId` field. */
  gameId?: Maybe<StringFilter>;
  /** Filter by the object’s `innCt` field. */
  innCt?: Maybe<IntFilter>;
  /** Filter by the object’s `homeHalf` field. */
  homeHalf?: Maybe<IntFilter>;
  /** Filter by the object’s `awayScoreCt` field. */
  awayScoreCt?: Maybe<IntFilter>;
  /** Filter by the object’s `homeScoreCt` field. */
  homeScoreCt?: Maybe<IntFilter>;
  /** Filter by the object’s `batId` field. */
  batId?: Maybe<StringFilter>;
  /** Filter by the object’s `pitId` field. */
  pitId?: Maybe<StringFilter>;
  /** Filter by the object’s `eventTx` field. */
  eventTx?: Maybe<StringFilter>;
  /** Filter by the object’s `hCd` field. */
  hCd?: Maybe<IntFilter>;
  /** Filter by the object’s `outs` field. */
  outs?: Maybe<IntFilter>;
  /** Filter by the object’s `e` field. */
  e?: Maybe<IntFilter>;
  /** Filter by the object’s `eventId` field. */
  eventId?: Maybe<IntFilter>;
  /** Filter by the object’s `teamId` field. */
  teamId?: Maybe<StringFilter>;
  /** Filter by the object’s `opponentTeamId` field. */
  opponentTeamId?: Maybe<StringFilter>;
  /** Filter by the object’s `innRunsCt` field. */
  innRunsCt?: Maybe<IntFilter>;
  /** Filter by the object’s `startBasesCd` field. */
  startBasesCd?: Maybe<IntFilter>;
  /** Filter by the object’s `endBasesCd` field. */
  endBasesCd?: Maybe<IntFilter>;
  /** Filter by the object’s `r` field. */
  r?: Maybe<IntFilter>;
  /** Filter by the object’s `fateRunsCt` field. */
  fateRunsCt?: Maybe<IntFilter>;
  /** Filter by the object’s `ab` field. */
  ab?: Maybe<BooleanFilter>;
  /** Filter by the object’s `sh` field. */
  sh?: Maybe<BooleanFilter>;
  /** Filter by the object’s `sf` field. */
  sf?: Maybe<BooleanFilter>;
  /** Filter by the object’s `dp` field. */
  dp?: Maybe<BooleanFilter>;
  /** Filter by the object’s `tp` field. */
  tp?: Maybe<BooleanFilter>;
  /** Filter by the object’s `wp` field. */
  wp?: Maybe<BooleanFilter>;
  /** Filter by the object’s `pb` field. */
  pb?: Maybe<BooleanFilter>;
  /** Filter by the object’s `innEnd` field. */
  innEnd?: Maybe<BooleanFilter>;
  /** Filter by the object’s `pa` field. */
  pa?: Maybe<BooleanFilter>;
  /** Filter by the object’s `batSafeErr` field. */
  batSafeErr?: Maybe<BooleanFilter>;
  /** Filter by the object’s `so` field. */
  so?: Maybe<BooleanFilter>;
  /** Filter by the object’s `sb` field. */
  sb?: Maybe<IntFilter>;
  /** Filter by the object’s `cs` field. */
  cs?: Maybe<IntFilter>;
  /** Filter by the object’s `bk` field. */
  bk?: Maybe<BooleanFilter>;
  /** Filter by the object’s `ibb` field. */
  ibb?: Maybe<BooleanFilter>;
  /** Filter by the object’s `bb` field. */
  bb?: Maybe<BooleanFilter>;
  /** Filter by the object’s `hbp` field. */
  hbp?: Maybe<BooleanFilter>;
  /** Filter by the object’s `xi` field. */
  xi?: Maybe<BooleanFilter>;
  /** Filter by the object’s `single` field. */
  single?: Maybe<BooleanFilter>;
  /** Filter by the object’s `double` field. */
  double?: Maybe<BooleanFilter>;
  /** Filter by the object’s `triple` field. */
  triple?: Maybe<BooleanFilter>;
  /** Filter by the object’s `hr` field. */
  hr?: Maybe<BooleanFilter>;
  /** Filter by the object’s `h` field. */
  h?: Maybe<BooleanFilter>;
  /** Checks for all expressions in this list. */
  and?: Maybe<Array<RetroEventFilter>>;
  /** Checks for any expressions in this list. */
  or?: Maybe<Array<RetroEventFilter>>;
  /** Negates the expression. */
  not?: Maybe<RetroEventFilter>;
};

/** An input for mutations affecting `RetroEvent` */
export type RetroEventInput = {
  gameId: Scalars['String'];
  innCt?: Maybe<Scalars['Int']>;
  homeHalf?: Maybe<Scalars['Int']>;
  awayScoreCt?: Maybe<Scalars['Int']>;
  homeScoreCt?: Maybe<Scalars['Int']>;
  batId?: Maybe<Scalars['String']>;
  pitId?: Maybe<Scalars['String']>;
  eventTx?: Maybe<Scalars['String']>;
  hCd?: Maybe<Scalars['Int']>;
  outs?: Maybe<Scalars['Int']>;
  e?: Maybe<Scalars['Int']>;
  eventId: Scalars['Int'];
  teamId?: Maybe<Scalars['String']>;
  opponentTeamId?: Maybe<Scalars['String']>;
  innRunsCt?: Maybe<Scalars['Int']>;
  startBasesCd?: Maybe<Scalars['Int']>;
  endBasesCd?: Maybe<Scalars['Int']>;
  r?: Maybe<Scalars['Int']>;
  fateRunsCt?: Maybe<Scalars['Int']>;
  ab?: Maybe<Scalars['Boolean']>;
  sh?: Maybe<Scalars['Boolean']>;
  sf?: Maybe<Scalars['Boolean']>;
  dp?: Maybe<Scalars['Boolean']>;
  tp?: Maybe<Scalars['Boolean']>;
  wp?: Maybe<Scalars['Boolean']>;
  pb?: Maybe<Scalars['Boolean']>;
  innEnd?: Maybe<Scalars['Boolean']>;
  pa?: Maybe<Scalars['Boolean']>;
  batSafeErr?: Maybe<Scalars['Boolean']>;
  so?: Maybe<Scalars['Boolean']>;
  sb?: Maybe<Scalars['Int']>;
  cs?: Maybe<Scalars['Int']>;
  bk?: Maybe<Scalars['Boolean']>;
  ibb?: Maybe<Scalars['Boolean']>;
  bb?: Maybe<Scalars['Boolean']>;
  hbp?: Maybe<Scalars['Boolean']>;
  xi?: Maybe<Scalars['Boolean']>;
  single?: Maybe<Scalars['Boolean']>;
  double?: Maybe<Scalars['Boolean']>;
  triple?: Maybe<Scalars['Boolean']>;
  hr?: Maybe<Scalars['Boolean']>;
  h?: Maybe<Scalars['Boolean']>;
};

/** Represents an update to a `RetroEvent`. Fields that are set will be updated. */
export type RetroEventPatch = {
  gameId?: Maybe<Scalars['String']>;
  innCt?: Maybe<Scalars['Int']>;
  homeHalf?: Maybe<Scalars['Int']>;
  awayScoreCt?: Maybe<Scalars['Int']>;
  homeScoreCt?: Maybe<Scalars['Int']>;
  batId?: Maybe<Scalars['String']>;
  pitId?: Maybe<Scalars['String']>;
  eventTx?: Maybe<Scalars['String']>;
  hCd?: Maybe<Scalars['Int']>;
  outs?: Maybe<Scalars['Int']>;
  e?: Maybe<Scalars['Int']>;
  eventId?: Maybe<Scalars['Int']>;
  teamId?: Maybe<Scalars['String']>;
  opponentTeamId?: Maybe<Scalars['String']>;
  innRunsCt?: Maybe<Scalars['Int']>;
  startBasesCd?: Maybe<Scalars['Int']>;
  endBasesCd?: Maybe<Scalars['Int']>;
  r?: Maybe<Scalars['Int']>;
  fateRunsCt?: Maybe<Scalars['Int']>;
  ab?: Maybe<Scalars['Boolean']>;
  sh?: Maybe<Scalars['Boolean']>;
  sf?: Maybe<Scalars['Boolean']>;
  dp?: Maybe<Scalars['Boolean']>;
  tp?: Maybe<Scalars['Boolean']>;
  wp?: Maybe<Scalars['Boolean']>;
  pb?: Maybe<Scalars['Boolean']>;
  innEnd?: Maybe<Scalars['Boolean']>;
  pa?: Maybe<Scalars['Boolean']>;
  batSafeErr?: Maybe<Scalars['Boolean']>;
  so?: Maybe<Scalars['Boolean']>;
  sb?: Maybe<Scalars['Int']>;
  cs?: Maybe<Scalars['Int']>;
  bk?: Maybe<Scalars['Boolean']>;
  ibb?: Maybe<Scalars['Boolean']>;
  bb?: Maybe<Scalars['Boolean']>;
  hbp?: Maybe<Scalars['Boolean']>;
  xi?: Maybe<Scalars['Boolean']>;
  single?: Maybe<Scalars['Boolean']>;
  double?: Maybe<Scalars['Boolean']>;
  triple?: Maybe<Scalars['Boolean']>;
  hr?: Maybe<Scalars['Boolean']>;
  h?: Maybe<Scalars['Boolean']>;
};

/** A connection to a list of `RetroEvent` values. */
export type RetroEventsConnection = {
  __typename?: 'RetroEventsConnection';
  /** A list of `RetroEvent` objects. */
  nodes: Array<Maybe<RetroEvent>>;
  /** A list of edges which contains the `RetroEvent` and cursor to aid in pagination. */
  edges: Array<RetroEventsEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `RetroEvent` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `RetroEvent` edge in the connection. */
export type RetroEventsEdge = {
  __typename?: 'RetroEventsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `RetroEvent` at the end of the edge. */
  node?: Maybe<RetroEvent>;
};

/** Methods to use when ordering `RetroEvent`. */
export enum RetroEventsOrderBy {
  Natural = 'NATURAL',
  GameIdAsc = 'GAME_ID_ASC',
  GameIdDesc = 'GAME_ID_DESC',
  InnCtAsc = 'INN_CT_ASC',
  InnCtDesc = 'INN_CT_DESC',
  HomeHalfAsc = 'HOME_HALF_ASC',
  HomeHalfDesc = 'HOME_HALF_DESC',
  AwayScoreCtAsc = 'AWAY_SCORE_CT_ASC',
  AwayScoreCtDesc = 'AWAY_SCORE_CT_DESC',
  HomeScoreCtAsc = 'HOME_SCORE_CT_ASC',
  HomeScoreCtDesc = 'HOME_SCORE_CT_DESC',
  BatIdAsc = 'BAT_ID_ASC',
  BatIdDesc = 'BAT_ID_DESC',
  PitIdAsc = 'PIT_ID_ASC',
  PitIdDesc = 'PIT_ID_DESC',
  EventTxAsc = 'EVENT_TX_ASC',
  EventTxDesc = 'EVENT_TX_DESC',
  HCdAsc = 'H_CD_ASC',
  HCdDesc = 'H_CD_DESC',
  OutsAsc = 'OUTS_ASC',
  OutsDesc = 'OUTS_DESC',
  EAsc = 'E_ASC',
  EDesc = 'E_DESC',
  EventIdAsc = 'EVENT_ID_ASC',
  EventIdDesc = 'EVENT_ID_DESC',
  TeamIdAsc = 'TEAM_ID_ASC',
  TeamIdDesc = 'TEAM_ID_DESC',
  OpponentTeamIdAsc = 'OPPONENT_TEAM_ID_ASC',
  OpponentTeamIdDesc = 'OPPONENT_TEAM_ID_DESC',
  InnRunsCtAsc = 'INN_RUNS_CT_ASC',
  InnRunsCtDesc = 'INN_RUNS_CT_DESC',
  StartBasesCdAsc = 'START_BASES_CD_ASC',
  StartBasesCdDesc = 'START_BASES_CD_DESC',
  EndBasesCdAsc = 'END_BASES_CD_ASC',
  EndBasesCdDesc = 'END_BASES_CD_DESC',
  RAsc = 'R_ASC',
  RDesc = 'R_DESC',
  FateRunsCtAsc = 'FATE_RUNS_CT_ASC',
  FateRunsCtDesc = 'FATE_RUNS_CT_DESC',
  AbAsc = 'AB_ASC',
  AbDesc = 'AB_DESC',
  ShAsc = 'SH_ASC',
  ShDesc = 'SH_DESC',
  SfAsc = 'SF_ASC',
  SfDesc = 'SF_DESC',
  DpAsc = 'DP_ASC',
  DpDesc = 'DP_DESC',
  TpAsc = 'TP_ASC',
  TpDesc = 'TP_DESC',
  WpAsc = 'WP_ASC',
  WpDesc = 'WP_DESC',
  PbAsc = 'PB_ASC',
  PbDesc = 'PB_DESC',
  InnEndAsc = 'INN_END_ASC',
  InnEndDesc = 'INN_END_DESC',
  PaAsc = 'PA_ASC',
  PaDesc = 'PA_DESC',
  BatSafeErrAsc = 'BAT_SAFE_ERR_ASC',
  BatSafeErrDesc = 'BAT_SAFE_ERR_DESC',
  SoAsc = 'SO_ASC',
  SoDesc = 'SO_DESC',
  SbAsc = 'SB_ASC',
  SbDesc = 'SB_DESC',
  CsAsc = 'CS_ASC',
  CsDesc = 'CS_DESC',
  BkAsc = 'BK_ASC',
  BkDesc = 'BK_DESC',
  IbbAsc = 'IBB_ASC',
  IbbDesc = 'IBB_DESC',
  BbAsc = 'BB_ASC',
  BbDesc = 'BB_DESC',
  HbpAsc = 'HBP_ASC',
  HbpDesc = 'HBP_DESC',
  XiAsc = 'XI_ASC',
  XiDesc = 'XI_DESC',
  SingleAsc = 'SINGLE_ASC',
  SingleDesc = 'SINGLE_DESC',
  DoubleAsc = 'DOUBLE_ASC',
  DoubleDesc = 'DOUBLE_DESC',
  TripleAsc = 'TRIPLE_ASC',
  TripleDesc = 'TRIPLE_DESC',
  HrAsc = 'HR_ASC',
  HrDesc = 'HR_DESC',
  HAsc = 'H_ASC',
  HDesc = 'H_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

export type RetroFielding = Node & {
  __typename?: 'RetroFielding';
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  gameId: Scalars['String'];
  playerId: Scalars['String'];
  pos: Scalars['String'];
  teamId?: Maybe<Scalars['String']>;
  g?: Maybe<Scalars['Int']>;
  gs?: Maybe<Scalars['Int']>;
  innOuts?: Maybe<Scalars['Int']>;
  tc?: Maybe<Scalars['Int']>;
  po?: Maybe<Scalars['Int']>;
  a?: Maybe<Scalars['Int']>;
  e?: Maybe<Scalars['Int']>;
  dp?: Maybe<Scalars['Int']>;
  tp?: Maybe<Scalars['Int']>;
  pb?: Maybe<Scalars['Int']>;
  xi?: Maybe<Scalars['Int']>;
  gameStart?: Maybe<Scalars['Datetime']>;
  year?: Maybe<Scalars['Int']>;
  /** Reads a single `LahmanPerson` that is related to this `RetroFielding`. */
  lahmanPersonByPlayerId?: Maybe<LahmanPerson>;
};

/**
 * A condition to be used against `RetroFielding` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type RetroFieldingCondition = {
  /** Checks for equality with the object’s `gameId` field. */
  gameId?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `playerId` field. */
  playerId?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `pos` field. */
  pos?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `teamId` field. */
  teamId?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `g` field. */
  g?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `gs` field. */
  gs?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `innOuts` field. */
  innOuts?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `tc` field. */
  tc?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `po` field. */
  po?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `a` field. */
  a?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `e` field. */
  e?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `dp` field. */
  dp?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `tp` field. */
  tp?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `pb` field. */
  pb?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `xi` field. */
  xi?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `gameStart` field. */
  gameStart?: Maybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `year` field. */
  year?: Maybe<Scalars['Int']>;
};

/** A filter to be used against `RetroFielding` object types. All fields are combined with a logical ‘and.’ */
export type RetroFieldingFilter = {
  /** Filter by the object’s `gameId` field. */
  gameId?: Maybe<StringFilter>;
  /** Filter by the object’s `playerId` field. */
  playerId?: Maybe<StringFilter>;
  /** Filter by the object’s `pos` field. */
  pos?: Maybe<StringFilter>;
  /** Filter by the object’s `teamId` field. */
  teamId?: Maybe<StringFilter>;
  /** Filter by the object’s `g` field. */
  g?: Maybe<IntFilter>;
  /** Filter by the object’s `gs` field. */
  gs?: Maybe<IntFilter>;
  /** Filter by the object’s `innOuts` field. */
  innOuts?: Maybe<IntFilter>;
  /** Filter by the object’s `tc` field. */
  tc?: Maybe<IntFilter>;
  /** Filter by the object’s `po` field. */
  po?: Maybe<IntFilter>;
  /** Filter by the object’s `a` field. */
  a?: Maybe<IntFilter>;
  /** Filter by the object’s `e` field. */
  e?: Maybe<IntFilter>;
  /** Filter by the object’s `dp` field. */
  dp?: Maybe<IntFilter>;
  /** Filter by the object’s `tp` field. */
  tp?: Maybe<IntFilter>;
  /** Filter by the object’s `pb` field. */
  pb?: Maybe<IntFilter>;
  /** Filter by the object’s `xi` field. */
  xi?: Maybe<IntFilter>;
  /** Filter by the object’s `gameStart` field. */
  gameStart?: Maybe<DatetimeFilter>;
  /** Filter by the object’s `year` field. */
  year?: Maybe<IntFilter>;
  /** Checks for all expressions in this list. */
  and?: Maybe<Array<RetroFieldingFilter>>;
  /** Checks for any expressions in this list. */
  or?: Maybe<Array<RetroFieldingFilter>>;
  /** Negates the expression. */
  not?: Maybe<RetroFieldingFilter>;
};

/** An input for mutations affecting `RetroFielding` */
export type RetroFieldingInput = {
  gameId: Scalars['String'];
  playerId: Scalars['String'];
  pos: Scalars['String'];
  teamId?: Maybe<Scalars['String']>;
  g?: Maybe<Scalars['Int']>;
  gs?: Maybe<Scalars['Int']>;
  innOuts?: Maybe<Scalars['Int']>;
  tc?: Maybe<Scalars['Int']>;
  po?: Maybe<Scalars['Int']>;
  a?: Maybe<Scalars['Int']>;
  e?: Maybe<Scalars['Int']>;
  dp?: Maybe<Scalars['Int']>;
  tp?: Maybe<Scalars['Int']>;
  pb?: Maybe<Scalars['Int']>;
  xi?: Maybe<Scalars['Int']>;
  gameStart?: Maybe<Scalars['Datetime']>;
  year?: Maybe<Scalars['Int']>;
};

/** Represents an update to a `RetroFielding`. Fields that are set will be updated. */
export type RetroFieldingPatch = {
  gameId?: Maybe<Scalars['String']>;
  playerId?: Maybe<Scalars['String']>;
  pos?: Maybe<Scalars['String']>;
  teamId?: Maybe<Scalars['String']>;
  g?: Maybe<Scalars['Int']>;
  gs?: Maybe<Scalars['Int']>;
  innOuts?: Maybe<Scalars['Int']>;
  tc?: Maybe<Scalars['Int']>;
  po?: Maybe<Scalars['Int']>;
  a?: Maybe<Scalars['Int']>;
  e?: Maybe<Scalars['Int']>;
  dp?: Maybe<Scalars['Int']>;
  tp?: Maybe<Scalars['Int']>;
  pb?: Maybe<Scalars['Int']>;
  xi?: Maybe<Scalars['Int']>;
  gameStart?: Maybe<Scalars['Datetime']>;
  year?: Maybe<Scalars['Int']>;
};

/** A connection to a list of `RetroFielding` values. */
export type RetroFieldingsConnection = {
  __typename?: 'RetroFieldingsConnection';
  /** A list of `RetroFielding` objects. */
  nodes: Array<Maybe<RetroFielding>>;
  /** A list of edges which contains the `RetroFielding` and cursor to aid in pagination. */
  edges: Array<RetroFieldingsEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `RetroFielding` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `RetroFielding` edge in the connection. */
export type RetroFieldingsEdge = {
  __typename?: 'RetroFieldingsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `RetroFielding` at the end of the edge. */
  node?: Maybe<RetroFielding>;
};

/** Methods to use when ordering `RetroFielding`. */
export enum RetroFieldingsOrderBy {
  Natural = 'NATURAL',
  GameIdAsc = 'GAME_ID_ASC',
  GameIdDesc = 'GAME_ID_DESC',
  PlayerIdAsc = 'PLAYER_ID_ASC',
  PlayerIdDesc = 'PLAYER_ID_DESC',
  PosAsc = 'POS_ASC',
  PosDesc = 'POS_DESC',
  TeamIdAsc = 'TEAM_ID_ASC',
  TeamIdDesc = 'TEAM_ID_DESC',
  GAsc = 'G_ASC',
  GDesc = 'G_DESC',
  GsAsc = 'GS_ASC',
  GsDesc = 'GS_DESC',
  InnOutsAsc = 'INN_OUTS_ASC',
  InnOutsDesc = 'INN_OUTS_DESC',
  TcAsc = 'TC_ASC',
  TcDesc = 'TC_DESC',
  PoAsc = 'PO_ASC',
  PoDesc = 'PO_DESC',
  AAsc = 'A_ASC',
  ADesc = 'A_DESC',
  EAsc = 'E_ASC',
  EDesc = 'E_DESC',
  DpAsc = 'DP_ASC',
  DpDesc = 'DP_DESC',
  TpAsc = 'TP_ASC',
  TpDesc = 'TP_DESC',
  PbAsc = 'PB_ASC',
  PbDesc = 'PB_DESC',
  XiAsc = 'XI_ASC',
  XiDesc = 'XI_DESC',
  GameStartAsc = 'GAME_START_ASC',
  GameStartDesc = 'GAME_START_DESC',
  YearAsc = 'YEAR_ASC',
  YearDesc = 'YEAR_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

export type RetroGame = Node & {
  __typename?: 'RetroGame';
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  gameId: Scalars['String'];
  gameStart?: Maybe<Scalars['Datetime']>;
  gameCt?: Maybe<Scalars['Int']>;
  daynightParkCd?: Maybe<Scalars['String']>;
  parkId?: Maybe<Scalars['String']>;
  base4UmpId?: Maybe<Scalars['String']>;
  base1UmpId?: Maybe<Scalars['String']>;
  base2UmpId?: Maybe<Scalars['String']>;
  base3UmpId?: Maybe<Scalars['String']>;
  scorerRecordId?: Maybe<Scalars['String']>;
  translatorRecordId?: Maybe<Scalars['String']>;
  inputterRecordId?: Maybe<Scalars['String']>;
  inputRecordTs?: Maybe<Scalars['String']>;
  methodRecordCd?: Maybe<Scalars['Int']>;
  pitchesRecordCd?: Maybe<Scalars['Int']>;
  minutesGameCt?: Maybe<Scalars['Int']>;
  innCt?: Maybe<Scalars['Int']>;
  winPitId?: Maybe<Scalars['String']>;
  losePitId?: Maybe<Scalars['String']>;
  savePitId?: Maybe<Scalars['String']>;
  gwrbiBatId?: Maybe<Scalars['String']>;
  outsCt?: Maybe<Scalars['Int']>;
  winPitNameTx?: Maybe<Scalars['String']>;
  losePitNameTx?: Maybe<Scalars['String']>;
  savePitNameTx?: Maybe<Scalars['String']>;
  goaheadRbiId?: Maybe<Scalars['String']>;
  goaheadRbiNameTx?: Maybe<Scalars['String']>;
  dh?: Maybe<Scalars['Boolean']>;
  attendance?: Maybe<Scalars['BigInt']>;
  temperature?: Maybe<Scalars['Int']>;
  windDirection?: Maybe<Scalars['String']>;
  windSpeed?: Maybe<Scalars['Int']>;
  fieldCondition?: Maybe<Scalars['String']>;
  precipType?: Maybe<Scalars['String']>;
  skyCondition?: Maybe<Scalars['String']>;
  /** Reads a single `LahmanPerson` that is related to this `RetroGame`. */
  lahmanPersonByWinPitId?: Maybe<LahmanPerson>;
  /** Reads a single `LahmanPerson` that is related to this `RetroGame`. */
  lahmanPersonByLosePitId?: Maybe<LahmanPerson>;
  /** Reads a single `LahmanPerson` that is related to this `RetroGame`. */
  lahmanPersonBySavePitId?: Maybe<LahmanPerson>;
  /** Reads a single `LahmanPerson` that is related to this `RetroGame`. */
  lahmanPersonByGwrbiBatId?: Maybe<LahmanPerson>;
  /** Reads and enables pagination through a set of `RetroEvent`. */
  retroEventsByGameId: RetroEventsConnection;
};


export type RetroGameRetroEventsByGameIdArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<RetroEventsOrderBy>>;
  condition?: Maybe<RetroEventCondition>;
  filter?: Maybe<RetroEventFilter>;
};

/**
 * A condition to be used against `RetroGame` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type RetroGameCondition = {
  /** Checks for equality with the object’s `gameId` field. */
  gameId?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `gameStart` field. */
  gameStart?: Maybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `gameCt` field. */
  gameCt?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `daynightParkCd` field. */
  daynightParkCd?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `parkId` field. */
  parkId?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `base4UmpId` field. */
  base4UmpId?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `base1UmpId` field. */
  base1UmpId?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `base2UmpId` field. */
  base2UmpId?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `base3UmpId` field. */
  base3UmpId?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `scorerRecordId` field. */
  scorerRecordId?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `translatorRecordId` field. */
  translatorRecordId?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `inputterRecordId` field. */
  inputterRecordId?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `inputRecordTs` field. */
  inputRecordTs?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `methodRecordCd` field. */
  methodRecordCd?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `pitchesRecordCd` field. */
  pitchesRecordCd?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `minutesGameCt` field. */
  minutesGameCt?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `innCt` field. */
  innCt?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `winPitId` field. */
  winPitId?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `losePitId` field. */
  losePitId?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `savePitId` field. */
  savePitId?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `gwrbiBatId` field. */
  gwrbiBatId?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `outsCt` field. */
  outsCt?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `winPitNameTx` field. */
  winPitNameTx?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `losePitNameTx` field. */
  losePitNameTx?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `savePitNameTx` field. */
  savePitNameTx?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `goaheadRbiId` field. */
  goaheadRbiId?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `goaheadRbiNameTx` field. */
  goaheadRbiNameTx?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `dh` field. */
  dh?: Maybe<Scalars['Boolean']>;
  /** Checks for equality with the object’s `attendance` field. */
  attendance?: Maybe<Scalars['BigInt']>;
  /** Checks for equality with the object’s `temperature` field. */
  temperature?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `windDirection` field. */
  windDirection?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `windSpeed` field. */
  windSpeed?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `fieldCondition` field. */
  fieldCondition?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `precipType` field. */
  precipType?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `skyCondition` field. */
  skyCondition?: Maybe<Scalars['String']>;
};

/** A filter to be used against `RetroGame` object types. All fields are combined with a logical ‘and.’ */
export type RetroGameFilter = {
  /** Filter by the object’s `gameId` field. */
  gameId?: Maybe<StringFilter>;
  /** Filter by the object’s `gameStart` field. */
  gameStart?: Maybe<DatetimeFilter>;
  /** Filter by the object’s `gameCt` field. */
  gameCt?: Maybe<IntFilter>;
  /** Filter by the object’s `daynightParkCd` field. */
  daynightParkCd?: Maybe<StringFilter>;
  /** Filter by the object’s `parkId` field. */
  parkId?: Maybe<StringFilter>;
  /** Filter by the object’s `base4UmpId` field. */
  base4UmpId?: Maybe<StringFilter>;
  /** Filter by the object’s `base1UmpId` field. */
  base1UmpId?: Maybe<StringFilter>;
  /** Filter by the object’s `base2UmpId` field. */
  base2UmpId?: Maybe<StringFilter>;
  /** Filter by the object’s `base3UmpId` field. */
  base3UmpId?: Maybe<StringFilter>;
  /** Filter by the object’s `scorerRecordId` field. */
  scorerRecordId?: Maybe<StringFilter>;
  /** Filter by the object’s `translatorRecordId` field. */
  translatorRecordId?: Maybe<StringFilter>;
  /** Filter by the object’s `inputterRecordId` field. */
  inputterRecordId?: Maybe<StringFilter>;
  /** Filter by the object’s `inputRecordTs` field. */
  inputRecordTs?: Maybe<StringFilter>;
  /** Filter by the object’s `methodRecordCd` field. */
  methodRecordCd?: Maybe<IntFilter>;
  /** Filter by the object’s `pitchesRecordCd` field. */
  pitchesRecordCd?: Maybe<IntFilter>;
  /** Filter by the object’s `minutesGameCt` field. */
  minutesGameCt?: Maybe<IntFilter>;
  /** Filter by the object’s `innCt` field. */
  innCt?: Maybe<IntFilter>;
  /** Filter by the object’s `winPitId` field. */
  winPitId?: Maybe<StringFilter>;
  /** Filter by the object’s `losePitId` field. */
  losePitId?: Maybe<StringFilter>;
  /** Filter by the object’s `savePitId` field. */
  savePitId?: Maybe<StringFilter>;
  /** Filter by the object’s `gwrbiBatId` field. */
  gwrbiBatId?: Maybe<StringFilter>;
  /** Filter by the object’s `outsCt` field. */
  outsCt?: Maybe<IntFilter>;
  /** Filter by the object’s `winPitNameTx` field. */
  winPitNameTx?: Maybe<StringFilter>;
  /** Filter by the object’s `losePitNameTx` field. */
  losePitNameTx?: Maybe<StringFilter>;
  /** Filter by the object’s `savePitNameTx` field. */
  savePitNameTx?: Maybe<StringFilter>;
  /** Filter by the object’s `goaheadRbiId` field. */
  goaheadRbiId?: Maybe<StringFilter>;
  /** Filter by the object’s `goaheadRbiNameTx` field. */
  goaheadRbiNameTx?: Maybe<StringFilter>;
  /** Filter by the object’s `dh` field. */
  dh?: Maybe<BooleanFilter>;
  /** Filter by the object’s `attendance` field. */
  attendance?: Maybe<BigIntFilter>;
  /** Filter by the object’s `temperature` field. */
  temperature?: Maybe<IntFilter>;
  /** Filter by the object’s `windDirection` field. */
  windDirection?: Maybe<StringFilter>;
  /** Filter by the object’s `windSpeed` field. */
  windSpeed?: Maybe<IntFilter>;
  /** Filter by the object’s `fieldCondition` field. */
  fieldCondition?: Maybe<StringFilter>;
  /** Filter by the object’s `precipType` field. */
  precipType?: Maybe<StringFilter>;
  /** Filter by the object’s `skyCondition` field. */
  skyCondition?: Maybe<StringFilter>;
  /** Checks for all expressions in this list. */
  and?: Maybe<Array<RetroGameFilter>>;
  /** Checks for any expressions in this list. */
  or?: Maybe<Array<RetroGameFilter>>;
  /** Negates the expression. */
  not?: Maybe<RetroGameFilter>;
};

/** An input for mutations affecting `RetroGame` */
export type RetroGameInput = {
  gameId: Scalars['String'];
  gameStart?: Maybe<Scalars['Datetime']>;
  gameCt?: Maybe<Scalars['Int']>;
  daynightParkCd?: Maybe<Scalars['String']>;
  parkId?: Maybe<Scalars['String']>;
  base4UmpId?: Maybe<Scalars['String']>;
  base1UmpId?: Maybe<Scalars['String']>;
  base2UmpId?: Maybe<Scalars['String']>;
  base3UmpId?: Maybe<Scalars['String']>;
  scorerRecordId?: Maybe<Scalars['String']>;
  translatorRecordId?: Maybe<Scalars['String']>;
  inputterRecordId?: Maybe<Scalars['String']>;
  inputRecordTs?: Maybe<Scalars['String']>;
  methodRecordCd?: Maybe<Scalars['Int']>;
  pitchesRecordCd?: Maybe<Scalars['Int']>;
  minutesGameCt?: Maybe<Scalars['Int']>;
  innCt?: Maybe<Scalars['Int']>;
  winPitId?: Maybe<Scalars['String']>;
  losePitId?: Maybe<Scalars['String']>;
  savePitId?: Maybe<Scalars['String']>;
  gwrbiBatId?: Maybe<Scalars['String']>;
  outsCt?: Maybe<Scalars['Int']>;
  winPitNameTx?: Maybe<Scalars['String']>;
  losePitNameTx?: Maybe<Scalars['String']>;
  savePitNameTx?: Maybe<Scalars['String']>;
  goaheadRbiId?: Maybe<Scalars['String']>;
  goaheadRbiNameTx?: Maybe<Scalars['String']>;
  dh?: Maybe<Scalars['Boolean']>;
  attendance?: Maybe<Scalars['BigInt']>;
  temperature?: Maybe<Scalars['Int']>;
  windDirection?: Maybe<Scalars['String']>;
  windSpeed?: Maybe<Scalars['Int']>;
  fieldCondition?: Maybe<Scalars['String']>;
  precipType?: Maybe<Scalars['String']>;
  skyCondition?: Maybe<Scalars['String']>;
};

/** Represents an update to a `RetroGame`. Fields that are set will be updated. */
export type RetroGamePatch = {
  gameId?: Maybe<Scalars['String']>;
  gameStart?: Maybe<Scalars['Datetime']>;
  gameCt?: Maybe<Scalars['Int']>;
  daynightParkCd?: Maybe<Scalars['String']>;
  parkId?: Maybe<Scalars['String']>;
  base4UmpId?: Maybe<Scalars['String']>;
  base1UmpId?: Maybe<Scalars['String']>;
  base2UmpId?: Maybe<Scalars['String']>;
  base3UmpId?: Maybe<Scalars['String']>;
  scorerRecordId?: Maybe<Scalars['String']>;
  translatorRecordId?: Maybe<Scalars['String']>;
  inputterRecordId?: Maybe<Scalars['String']>;
  inputRecordTs?: Maybe<Scalars['String']>;
  methodRecordCd?: Maybe<Scalars['Int']>;
  pitchesRecordCd?: Maybe<Scalars['Int']>;
  minutesGameCt?: Maybe<Scalars['Int']>;
  innCt?: Maybe<Scalars['Int']>;
  winPitId?: Maybe<Scalars['String']>;
  losePitId?: Maybe<Scalars['String']>;
  savePitId?: Maybe<Scalars['String']>;
  gwrbiBatId?: Maybe<Scalars['String']>;
  outsCt?: Maybe<Scalars['Int']>;
  winPitNameTx?: Maybe<Scalars['String']>;
  losePitNameTx?: Maybe<Scalars['String']>;
  savePitNameTx?: Maybe<Scalars['String']>;
  goaheadRbiId?: Maybe<Scalars['String']>;
  goaheadRbiNameTx?: Maybe<Scalars['String']>;
  dh?: Maybe<Scalars['Boolean']>;
  attendance?: Maybe<Scalars['BigInt']>;
  temperature?: Maybe<Scalars['Int']>;
  windDirection?: Maybe<Scalars['String']>;
  windSpeed?: Maybe<Scalars['Int']>;
  fieldCondition?: Maybe<Scalars['String']>;
  precipType?: Maybe<Scalars['String']>;
  skyCondition?: Maybe<Scalars['String']>;
};

/** A connection to a list of `RetroGame` values. */
export type RetroGamesConnection = {
  __typename?: 'RetroGamesConnection';
  /** A list of `RetroGame` objects. */
  nodes: Array<Maybe<RetroGame>>;
  /** A list of edges which contains the `RetroGame` and cursor to aid in pagination. */
  edges: Array<RetroGamesEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `RetroGame` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `RetroGame` edge in the connection. */
export type RetroGamesEdge = {
  __typename?: 'RetroGamesEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `RetroGame` at the end of the edge. */
  node?: Maybe<RetroGame>;
};

/** Methods to use when ordering `RetroGame`. */
export enum RetroGamesOrderBy {
  Natural = 'NATURAL',
  GameIdAsc = 'GAME_ID_ASC',
  GameIdDesc = 'GAME_ID_DESC',
  GameStartAsc = 'GAME_START_ASC',
  GameStartDesc = 'GAME_START_DESC',
  GameCtAsc = 'GAME_CT_ASC',
  GameCtDesc = 'GAME_CT_DESC',
  DaynightParkCdAsc = 'DAYNIGHT_PARK_CD_ASC',
  DaynightParkCdDesc = 'DAYNIGHT_PARK_CD_DESC',
  ParkIdAsc = 'PARK_ID_ASC',
  ParkIdDesc = 'PARK_ID_DESC',
  Base4UmpIdAsc = 'BASE4_UMP_ID_ASC',
  Base4UmpIdDesc = 'BASE4_UMP_ID_DESC',
  Base1UmpIdAsc = 'BASE1_UMP_ID_ASC',
  Base1UmpIdDesc = 'BASE1_UMP_ID_DESC',
  Base2UmpIdAsc = 'BASE2_UMP_ID_ASC',
  Base2UmpIdDesc = 'BASE2_UMP_ID_DESC',
  Base3UmpIdAsc = 'BASE3_UMP_ID_ASC',
  Base3UmpIdDesc = 'BASE3_UMP_ID_DESC',
  ScorerRecordIdAsc = 'SCORER_RECORD_ID_ASC',
  ScorerRecordIdDesc = 'SCORER_RECORD_ID_DESC',
  TranslatorRecordIdAsc = 'TRANSLATOR_RECORD_ID_ASC',
  TranslatorRecordIdDesc = 'TRANSLATOR_RECORD_ID_DESC',
  InputterRecordIdAsc = 'INPUTTER_RECORD_ID_ASC',
  InputterRecordIdDesc = 'INPUTTER_RECORD_ID_DESC',
  InputRecordTsAsc = 'INPUT_RECORD_TS_ASC',
  InputRecordTsDesc = 'INPUT_RECORD_TS_DESC',
  MethodRecordCdAsc = 'METHOD_RECORD_CD_ASC',
  MethodRecordCdDesc = 'METHOD_RECORD_CD_DESC',
  PitchesRecordCdAsc = 'PITCHES_RECORD_CD_ASC',
  PitchesRecordCdDesc = 'PITCHES_RECORD_CD_DESC',
  MinutesGameCtAsc = 'MINUTES_GAME_CT_ASC',
  MinutesGameCtDesc = 'MINUTES_GAME_CT_DESC',
  InnCtAsc = 'INN_CT_ASC',
  InnCtDesc = 'INN_CT_DESC',
  WinPitIdAsc = 'WIN_PIT_ID_ASC',
  WinPitIdDesc = 'WIN_PIT_ID_DESC',
  LosePitIdAsc = 'LOSE_PIT_ID_ASC',
  LosePitIdDesc = 'LOSE_PIT_ID_DESC',
  SavePitIdAsc = 'SAVE_PIT_ID_ASC',
  SavePitIdDesc = 'SAVE_PIT_ID_DESC',
  GwrbiBatIdAsc = 'GWRBI_BAT_ID_ASC',
  GwrbiBatIdDesc = 'GWRBI_BAT_ID_DESC',
  OutsCtAsc = 'OUTS_CT_ASC',
  OutsCtDesc = 'OUTS_CT_DESC',
  WinPitNameTxAsc = 'WIN_PIT_NAME_TX_ASC',
  WinPitNameTxDesc = 'WIN_PIT_NAME_TX_DESC',
  LosePitNameTxAsc = 'LOSE_PIT_NAME_TX_ASC',
  LosePitNameTxDesc = 'LOSE_PIT_NAME_TX_DESC',
  SavePitNameTxAsc = 'SAVE_PIT_NAME_TX_ASC',
  SavePitNameTxDesc = 'SAVE_PIT_NAME_TX_DESC',
  GoaheadRbiIdAsc = 'GOAHEAD_RBI_ID_ASC',
  GoaheadRbiIdDesc = 'GOAHEAD_RBI_ID_DESC',
  GoaheadRbiNameTxAsc = 'GOAHEAD_RBI_NAME_TX_ASC',
  GoaheadRbiNameTxDesc = 'GOAHEAD_RBI_NAME_TX_DESC',
  DhAsc = 'DH_ASC',
  DhDesc = 'DH_DESC',
  AttendanceAsc = 'ATTENDANCE_ASC',
  AttendanceDesc = 'ATTENDANCE_DESC',
  TemperatureAsc = 'TEMPERATURE_ASC',
  TemperatureDesc = 'TEMPERATURE_DESC',
  WindDirectionAsc = 'WIND_DIRECTION_ASC',
  WindDirectionDesc = 'WIND_DIRECTION_DESC',
  WindSpeedAsc = 'WIND_SPEED_ASC',
  WindSpeedDesc = 'WIND_SPEED_DESC',
  FieldConditionAsc = 'FIELD_CONDITION_ASC',
  FieldConditionDesc = 'FIELD_CONDITION_DESC',
  PrecipTypeAsc = 'PRECIP_TYPE_ASC',
  PrecipTypeDesc = 'PRECIP_TYPE_DESC',
  SkyConditionAsc = 'SKY_CONDITION_ASC',
  SkyConditionDesc = 'SKY_CONDITION_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

export type RetroPitching = Node & {
  __typename?: 'RetroPitching';
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  gameId: Scalars['String'];
  playerId: Scalars['String'];
  teamId?: Maybe<Scalars['String']>;
  g?: Maybe<Scalars['Int']>;
  gs?: Maybe<Scalars['Int']>;
  cg?: Maybe<Scalars['Int']>;
  sho?: Maybe<Scalars['Int']>;
  gf?: Maybe<Scalars['Int']>;
  w?: Maybe<Scalars['Int']>;
  l?: Maybe<Scalars['Int']>;
  sv?: Maybe<Scalars['Int']>;
  out?: Maybe<Scalars['Int']>;
  tbf?: Maybe<Scalars['Int']>;
  ab?: Maybe<Scalars['Int']>;
  r?: Maybe<Scalars['Int']>;
  er?: Maybe<Scalars['Int']>;
  h?: Maybe<Scalars['Int']>;
  tb?: Maybe<Scalars['Int']>;
  double?: Maybe<Scalars['Int']>;
  triple?: Maybe<Scalars['Int']>;
  hr?: Maybe<Scalars['Int']>;
  hr4?: Maybe<Scalars['Int']>;
  bb?: Maybe<Scalars['Int']>;
  ibb?: Maybe<Scalars['Int']>;
  so?: Maybe<Scalars['Int']>;
  gidp?: Maybe<Scalars['Int']>;
  hbp?: Maybe<Scalars['Int']>;
  sh?: Maybe<Scalars['Int']>;
  sf?: Maybe<Scalars['Int']>;
  xi?: Maybe<Scalars['Int']>;
  wp?: Maybe<Scalars['Int']>;
  bk?: Maybe<Scalars['Int']>;
  ir?: Maybe<Scalars['Int']>;
  irs?: Maybe<Scalars['Int']>;
  go?: Maybe<Scalars['Int']>;
  ao?: Maybe<Scalars['Int']>;
  pitch?: Maybe<Scalars['Int']>;
  strike?: Maybe<Scalars['Int']>;
  gameStart?: Maybe<Scalars['Datetime']>;
  year?: Maybe<Scalars['Int']>;
  /** Reads a single `LahmanPerson` that is related to this `RetroPitching`. */
  lahmanPersonByPlayerId?: Maybe<LahmanPerson>;
};

/**
 * A condition to be used against `RetroPitching` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type RetroPitchingCondition = {
  /** Checks for equality with the object’s `gameId` field. */
  gameId?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `playerId` field. */
  playerId?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `teamId` field. */
  teamId?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `g` field. */
  g?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `gs` field. */
  gs?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `cg` field. */
  cg?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `sho` field. */
  sho?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `gf` field. */
  gf?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `w` field. */
  w?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `l` field. */
  l?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `sv` field. */
  sv?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `out` field. */
  out?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `tbf` field. */
  tbf?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `ab` field. */
  ab?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `r` field. */
  r?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `er` field. */
  er?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `h` field. */
  h?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `tb` field. */
  tb?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `double` field. */
  double?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `triple` field. */
  triple?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `hr` field. */
  hr?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `hr4` field. */
  hr4?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `bb` field. */
  bb?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `ibb` field. */
  ibb?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `so` field. */
  so?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `gidp` field. */
  gidp?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `hbp` field. */
  hbp?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `sh` field. */
  sh?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `sf` field. */
  sf?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `xi` field. */
  xi?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `wp` field. */
  wp?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `bk` field. */
  bk?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `ir` field. */
  ir?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `irs` field. */
  irs?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `go` field. */
  go?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `ao` field. */
  ao?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `pitch` field. */
  pitch?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `strike` field. */
  strike?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `gameStart` field. */
  gameStart?: Maybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `year` field. */
  year?: Maybe<Scalars['Int']>;
};

/** A filter to be used against `RetroPitching` object types. All fields are combined with a logical ‘and.’ */
export type RetroPitchingFilter = {
  /** Filter by the object’s `gameId` field. */
  gameId?: Maybe<StringFilter>;
  /** Filter by the object’s `playerId` field. */
  playerId?: Maybe<StringFilter>;
  /** Filter by the object’s `teamId` field. */
  teamId?: Maybe<StringFilter>;
  /** Filter by the object’s `g` field. */
  g?: Maybe<IntFilter>;
  /** Filter by the object’s `gs` field. */
  gs?: Maybe<IntFilter>;
  /** Filter by the object’s `cg` field. */
  cg?: Maybe<IntFilter>;
  /** Filter by the object’s `sho` field. */
  sho?: Maybe<IntFilter>;
  /** Filter by the object’s `gf` field. */
  gf?: Maybe<IntFilter>;
  /** Filter by the object’s `w` field. */
  w?: Maybe<IntFilter>;
  /** Filter by the object’s `l` field. */
  l?: Maybe<IntFilter>;
  /** Filter by the object’s `sv` field. */
  sv?: Maybe<IntFilter>;
  /** Filter by the object’s `out` field. */
  out?: Maybe<IntFilter>;
  /** Filter by the object’s `tbf` field. */
  tbf?: Maybe<IntFilter>;
  /** Filter by the object’s `ab` field. */
  ab?: Maybe<IntFilter>;
  /** Filter by the object’s `r` field. */
  r?: Maybe<IntFilter>;
  /** Filter by the object’s `er` field. */
  er?: Maybe<IntFilter>;
  /** Filter by the object’s `h` field. */
  h?: Maybe<IntFilter>;
  /** Filter by the object’s `tb` field. */
  tb?: Maybe<IntFilter>;
  /** Filter by the object’s `double` field. */
  double?: Maybe<IntFilter>;
  /** Filter by the object’s `triple` field. */
  triple?: Maybe<IntFilter>;
  /** Filter by the object’s `hr` field. */
  hr?: Maybe<IntFilter>;
  /** Filter by the object’s `hr4` field. */
  hr4?: Maybe<IntFilter>;
  /** Filter by the object’s `bb` field. */
  bb?: Maybe<IntFilter>;
  /** Filter by the object’s `ibb` field. */
  ibb?: Maybe<IntFilter>;
  /** Filter by the object’s `so` field. */
  so?: Maybe<IntFilter>;
  /** Filter by the object’s `gidp` field. */
  gidp?: Maybe<IntFilter>;
  /** Filter by the object’s `hbp` field. */
  hbp?: Maybe<IntFilter>;
  /** Filter by the object’s `sh` field. */
  sh?: Maybe<IntFilter>;
  /** Filter by the object’s `sf` field. */
  sf?: Maybe<IntFilter>;
  /** Filter by the object’s `xi` field. */
  xi?: Maybe<IntFilter>;
  /** Filter by the object’s `wp` field. */
  wp?: Maybe<IntFilter>;
  /** Filter by the object’s `bk` field. */
  bk?: Maybe<IntFilter>;
  /** Filter by the object’s `ir` field. */
  ir?: Maybe<IntFilter>;
  /** Filter by the object’s `irs` field. */
  irs?: Maybe<IntFilter>;
  /** Filter by the object’s `go` field. */
  go?: Maybe<IntFilter>;
  /** Filter by the object’s `ao` field. */
  ao?: Maybe<IntFilter>;
  /** Filter by the object’s `pitch` field. */
  pitch?: Maybe<IntFilter>;
  /** Filter by the object’s `strike` field. */
  strike?: Maybe<IntFilter>;
  /** Filter by the object’s `gameStart` field. */
  gameStart?: Maybe<DatetimeFilter>;
  /** Filter by the object’s `year` field. */
  year?: Maybe<IntFilter>;
  /** Checks for all expressions in this list. */
  and?: Maybe<Array<RetroPitchingFilter>>;
  /** Checks for any expressions in this list. */
  or?: Maybe<Array<RetroPitchingFilter>>;
  /** Negates the expression. */
  not?: Maybe<RetroPitchingFilter>;
};

/** An input for mutations affecting `RetroPitching` */
export type RetroPitchingInput = {
  gameId: Scalars['String'];
  playerId: Scalars['String'];
  teamId?: Maybe<Scalars['String']>;
  g?: Maybe<Scalars['Int']>;
  gs?: Maybe<Scalars['Int']>;
  cg?: Maybe<Scalars['Int']>;
  sho?: Maybe<Scalars['Int']>;
  gf?: Maybe<Scalars['Int']>;
  w?: Maybe<Scalars['Int']>;
  l?: Maybe<Scalars['Int']>;
  sv?: Maybe<Scalars['Int']>;
  out?: Maybe<Scalars['Int']>;
  tbf?: Maybe<Scalars['Int']>;
  ab?: Maybe<Scalars['Int']>;
  r?: Maybe<Scalars['Int']>;
  er?: Maybe<Scalars['Int']>;
  h?: Maybe<Scalars['Int']>;
  tb?: Maybe<Scalars['Int']>;
  double?: Maybe<Scalars['Int']>;
  triple?: Maybe<Scalars['Int']>;
  hr?: Maybe<Scalars['Int']>;
  hr4?: Maybe<Scalars['Int']>;
  bb?: Maybe<Scalars['Int']>;
  ibb?: Maybe<Scalars['Int']>;
  so?: Maybe<Scalars['Int']>;
  gidp?: Maybe<Scalars['Int']>;
  hbp?: Maybe<Scalars['Int']>;
  sh?: Maybe<Scalars['Int']>;
  sf?: Maybe<Scalars['Int']>;
  xi?: Maybe<Scalars['Int']>;
  wp?: Maybe<Scalars['Int']>;
  bk?: Maybe<Scalars['Int']>;
  ir?: Maybe<Scalars['Int']>;
  irs?: Maybe<Scalars['Int']>;
  go?: Maybe<Scalars['Int']>;
  ao?: Maybe<Scalars['Int']>;
  pitch?: Maybe<Scalars['Int']>;
  strike?: Maybe<Scalars['Int']>;
  gameStart?: Maybe<Scalars['Datetime']>;
  year?: Maybe<Scalars['Int']>;
};

/** Represents an update to a `RetroPitching`. Fields that are set will be updated. */
export type RetroPitchingPatch = {
  gameId?: Maybe<Scalars['String']>;
  playerId?: Maybe<Scalars['String']>;
  teamId?: Maybe<Scalars['String']>;
  g?: Maybe<Scalars['Int']>;
  gs?: Maybe<Scalars['Int']>;
  cg?: Maybe<Scalars['Int']>;
  sho?: Maybe<Scalars['Int']>;
  gf?: Maybe<Scalars['Int']>;
  w?: Maybe<Scalars['Int']>;
  l?: Maybe<Scalars['Int']>;
  sv?: Maybe<Scalars['Int']>;
  out?: Maybe<Scalars['Int']>;
  tbf?: Maybe<Scalars['Int']>;
  ab?: Maybe<Scalars['Int']>;
  r?: Maybe<Scalars['Int']>;
  er?: Maybe<Scalars['Int']>;
  h?: Maybe<Scalars['Int']>;
  tb?: Maybe<Scalars['Int']>;
  double?: Maybe<Scalars['Int']>;
  triple?: Maybe<Scalars['Int']>;
  hr?: Maybe<Scalars['Int']>;
  hr4?: Maybe<Scalars['Int']>;
  bb?: Maybe<Scalars['Int']>;
  ibb?: Maybe<Scalars['Int']>;
  so?: Maybe<Scalars['Int']>;
  gidp?: Maybe<Scalars['Int']>;
  hbp?: Maybe<Scalars['Int']>;
  sh?: Maybe<Scalars['Int']>;
  sf?: Maybe<Scalars['Int']>;
  xi?: Maybe<Scalars['Int']>;
  wp?: Maybe<Scalars['Int']>;
  bk?: Maybe<Scalars['Int']>;
  ir?: Maybe<Scalars['Int']>;
  irs?: Maybe<Scalars['Int']>;
  go?: Maybe<Scalars['Int']>;
  ao?: Maybe<Scalars['Int']>;
  pitch?: Maybe<Scalars['Int']>;
  strike?: Maybe<Scalars['Int']>;
  gameStart?: Maybe<Scalars['Datetime']>;
  year?: Maybe<Scalars['Int']>;
};

/** A connection to a list of `RetroPitching` values. */
export type RetroPitchingsConnection = {
  __typename?: 'RetroPitchingsConnection';
  /** A list of `RetroPitching` objects. */
  nodes: Array<Maybe<RetroPitching>>;
  /** A list of edges which contains the `RetroPitching` and cursor to aid in pagination. */
  edges: Array<RetroPitchingsEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `RetroPitching` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `RetroPitching` edge in the connection. */
export type RetroPitchingsEdge = {
  __typename?: 'RetroPitchingsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `RetroPitching` at the end of the edge. */
  node?: Maybe<RetroPitching>;
};

/** Methods to use when ordering `RetroPitching`. */
export enum RetroPitchingsOrderBy {
  Natural = 'NATURAL',
  GameIdAsc = 'GAME_ID_ASC',
  GameIdDesc = 'GAME_ID_DESC',
  PlayerIdAsc = 'PLAYER_ID_ASC',
  PlayerIdDesc = 'PLAYER_ID_DESC',
  TeamIdAsc = 'TEAM_ID_ASC',
  TeamIdDesc = 'TEAM_ID_DESC',
  GAsc = 'G_ASC',
  GDesc = 'G_DESC',
  GsAsc = 'GS_ASC',
  GsDesc = 'GS_DESC',
  CgAsc = 'CG_ASC',
  CgDesc = 'CG_DESC',
  ShoAsc = 'SHO_ASC',
  ShoDesc = 'SHO_DESC',
  GfAsc = 'GF_ASC',
  GfDesc = 'GF_DESC',
  WAsc = 'W_ASC',
  WDesc = 'W_DESC',
  LAsc = 'L_ASC',
  LDesc = 'L_DESC',
  SvAsc = 'SV_ASC',
  SvDesc = 'SV_DESC',
  OutAsc = 'OUT_ASC',
  OutDesc = 'OUT_DESC',
  TbfAsc = 'TBF_ASC',
  TbfDesc = 'TBF_DESC',
  AbAsc = 'AB_ASC',
  AbDesc = 'AB_DESC',
  RAsc = 'R_ASC',
  RDesc = 'R_DESC',
  ErAsc = 'ER_ASC',
  ErDesc = 'ER_DESC',
  HAsc = 'H_ASC',
  HDesc = 'H_DESC',
  TbAsc = 'TB_ASC',
  TbDesc = 'TB_DESC',
  DoubleAsc = 'DOUBLE_ASC',
  DoubleDesc = 'DOUBLE_DESC',
  TripleAsc = 'TRIPLE_ASC',
  TripleDesc = 'TRIPLE_DESC',
  HrAsc = 'HR_ASC',
  HrDesc = 'HR_DESC',
  Hr4Asc = 'HR4_ASC',
  Hr4Desc = 'HR4_DESC',
  BbAsc = 'BB_ASC',
  BbDesc = 'BB_DESC',
  IbbAsc = 'IBB_ASC',
  IbbDesc = 'IBB_DESC',
  SoAsc = 'SO_ASC',
  SoDesc = 'SO_DESC',
  GidpAsc = 'GIDP_ASC',
  GidpDesc = 'GIDP_DESC',
  HbpAsc = 'HBP_ASC',
  HbpDesc = 'HBP_DESC',
  ShAsc = 'SH_ASC',
  ShDesc = 'SH_DESC',
  SfAsc = 'SF_ASC',
  SfDesc = 'SF_DESC',
  XiAsc = 'XI_ASC',
  XiDesc = 'XI_DESC',
  WpAsc = 'WP_ASC',
  WpDesc = 'WP_DESC',
  BkAsc = 'BK_ASC',
  BkDesc = 'BK_DESC',
  IrAsc = 'IR_ASC',
  IrDesc = 'IR_DESC',
  IrsAsc = 'IRS_ASC',
  IrsDesc = 'IRS_DESC',
  GoAsc = 'GO_ASC',
  GoDesc = 'GO_DESC',
  AoAsc = 'AO_ASC',
  AoDesc = 'AO_DESC',
  PitchAsc = 'PITCH_ASC',
  PitchDesc = 'PITCH_DESC',
  StrikeAsc = 'STRIKE_ASC',
  StrikeDesc = 'STRIKE_DESC',
  GameStartAsc = 'GAME_START_ASC',
  GameStartDesc = 'GAME_START_DESC',
  YearAsc = 'YEAR_ASC',
  YearDesc = 'YEAR_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

export type RetroTeamGame = Node & {
  __typename?: 'RetroTeamGame';
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  gameId: Scalars['String'];
  batLast?: Maybe<Scalars['Boolean']>;
  teamId: Scalars['String'];
  startPitId?: Maybe<Scalars['String']>;
  opponentTeamId?: Maybe<Scalars['String']>;
  r?: Maybe<Scalars['Int']>;
  h?: Maybe<Scalars['Int']>;
  e?: Maybe<Scalars['Int']>;
  lob?: Maybe<Scalars['Int']>;
  lineup1BatId?: Maybe<Scalars['String']>;
  lineup1FldCd?: Maybe<Scalars['Int']>;
  lineup2BatId?: Maybe<Scalars['String']>;
  lineup2FldCd?: Maybe<Scalars['Int']>;
  lineup3BatId?: Maybe<Scalars['String']>;
  lineup3FldCd?: Maybe<Scalars['Int']>;
  lineup4BatId?: Maybe<Scalars['String']>;
  lineup4FldCd?: Maybe<Scalars['Int']>;
  lineup5BatId?: Maybe<Scalars['String']>;
  lineup5FldCd?: Maybe<Scalars['Int']>;
  lineup6BatId?: Maybe<Scalars['String']>;
  lineup6FldCd?: Maybe<Scalars['Int']>;
  lineup7BatId?: Maybe<Scalars['String']>;
  lineup7FldCd?: Maybe<Scalars['Int']>;
  lineup8BatId?: Maybe<Scalars['String']>;
  lineup8FldCd?: Maybe<Scalars['Int']>;
  lineup9BatId?: Maybe<Scalars['String']>;
  lineup9FldCd?: Maybe<Scalars['Int']>;
  finishPitId?: Maybe<Scalars['String']>;
  teamLeagueId?: Maybe<Scalars['String']>;
  lineTx?: Maybe<Scalars['String']>;
  ab?: Maybe<Scalars['Int']>;
  double?: Maybe<Scalars['Int']>;
  triple?: Maybe<Scalars['Int']>;
  hr?: Maybe<Scalars['Int']>;
  rbi?: Maybe<Scalars['Int']>;
  sh?: Maybe<Scalars['Int']>;
  sf?: Maybe<Scalars['Int']>;
  hbp?: Maybe<Scalars['Int']>;
  bb?: Maybe<Scalars['Int']>;
  ibb?: Maybe<Scalars['Int']>;
  so?: Maybe<Scalars['Int']>;
  sb?: Maybe<Scalars['Int']>;
  cs?: Maybe<Scalars['Int']>;
  gidp?: Maybe<Scalars['Int']>;
  xi?: Maybe<Scalars['Int']>;
  pitcherCt?: Maybe<Scalars['Int']>;
  er?: Maybe<Scalars['Int']>;
  ter?: Maybe<Scalars['Int']>;
  wp?: Maybe<Scalars['Int']>;
  bk?: Maybe<Scalars['Int']>;
  po?: Maybe<Scalars['Int']>;
  a?: Maybe<Scalars['Int']>;
  pb?: Maybe<Scalars['Int']>;
  dp?: Maybe<Scalars['Int']>;
  tp?: Maybe<Scalars['Int']>;
  lineup1BatNameTx?: Maybe<Scalars['String']>;
  lineup2BatNameTx?: Maybe<Scalars['String']>;
  lineup3BatNameTx?: Maybe<Scalars['String']>;
  lineup4BatNameTx?: Maybe<Scalars['String']>;
  lineup5BatNameTx?: Maybe<Scalars['String']>;
  lineup6BatNameTx?: Maybe<Scalars['String']>;
  lineup7BatNameTx?: Maybe<Scalars['String']>;
  lineup8BatNameTx?: Maybe<Scalars['String']>;
  lineup9BatNameTx?: Maybe<Scalars['String']>;
  gameStart?: Maybe<Scalars['Datetime']>;
  year?: Maybe<Scalars['Int']>;
  /** Reads a single `LahmanTeam` that is related to this `RetroTeamGame`. */
  lahmanTeamByTeamIdAndYear?: Maybe<LahmanTeam>;
};

/**
 * A condition to be used against `RetroTeamGame` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type RetroTeamGameCondition = {
  /** Checks for equality with the object’s `gameId` field. */
  gameId?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `batLast` field. */
  batLast?: Maybe<Scalars['Boolean']>;
  /** Checks for equality with the object’s `teamId` field. */
  teamId?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `startPitId` field. */
  startPitId?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `opponentTeamId` field. */
  opponentTeamId?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `r` field. */
  r?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `h` field. */
  h?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `e` field. */
  e?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `lob` field. */
  lob?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `lineup1BatId` field. */
  lineup1BatId?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `lineup1FldCd` field. */
  lineup1FldCd?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `lineup2BatId` field. */
  lineup2BatId?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `lineup2FldCd` field. */
  lineup2FldCd?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `lineup3BatId` field. */
  lineup3BatId?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `lineup3FldCd` field. */
  lineup3FldCd?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `lineup4BatId` field. */
  lineup4BatId?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `lineup4FldCd` field. */
  lineup4FldCd?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `lineup5BatId` field. */
  lineup5BatId?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `lineup5FldCd` field. */
  lineup5FldCd?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `lineup6BatId` field. */
  lineup6BatId?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `lineup6FldCd` field. */
  lineup6FldCd?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `lineup7BatId` field. */
  lineup7BatId?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `lineup7FldCd` field. */
  lineup7FldCd?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `lineup8BatId` field. */
  lineup8BatId?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `lineup8FldCd` field. */
  lineup8FldCd?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `lineup9BatId` field. */
  lineup9BatId?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `lineup9FldCd` field. */
  lineup9FldCd?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `finishPitId` field. */
  finishPitId?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `teamLeagueId` field. */
  teamLeagueId?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `lineTx` field. */
  lineTx?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `ab` field. */
  ab?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `double` field. */
  double?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `triple` field. */
  triple?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `hr` field. */
  hr?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `rbi` field. */
  rbi?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `sh` field. */
  sh?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `sf` field. */
  sf?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `hbp` field. */
  hbp?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `bb` field. */
  bb?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `ibb` field. */
  ibb?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `so` field. */
  so?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `sb` field. */
  sb?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `cs` field. */
  cs?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `gidp` field. */
  gidp?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `xi` field. */
  xi?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `pitcherCt` field. */
  pitcherCt?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `er` field. */
  er?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `ter` field. */
  ter?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `wp` field. */
  wp?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `bk` field. */
  bk?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `po` field. */
  po?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `a` field. */
  a?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `pb` field. */
  pb?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `dp` field. */
  dp?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `tp` field. */
  tp?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `lineup1BatNameTx` field. */
  lineup1BatNameTx?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `lineup2BatNameTx` field. */
  lineup2BatNameTx?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `lineup3BatNameTx` field. */
  lineup3BatNameTx?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `lineup4BatNameTx` field. */
  lineup4BatNameTx?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `lineup5BatNameTx` field. */
  lineup5BatNameTx?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `lineup6BatNameTx` field. */
  lineup6BatNameTx?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `lineup7BatNameTx` field. */
  lineup7BatNameTx?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `lineup8BatNameTx` field. */
  lineup8BatNameTx?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `lineup9BatNameTx` field. */
  lineup9BatNameTx?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `gameStart` field. */
  gameStart?: Maybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `year` field. */
  year?: Maybe<Scalars['Int']>;
};

/** A filter to be used against `RetroTeamGame` object types. All fields are combined with a logical ‘and.’ */
export type RetroTeamGameFilter = {
  /** Filter by the object’s `gameId` field. */
  gameId?: Maybe<StringFilter>;
  /** Filter by the object’s `batLast` field. */
  batLast?: Maybe<BooleanFilter>;
  /** Filter by the object’s `teamId` field. */
  teamId?: Maybe<StringFilter>;
  /** Filter by the object’s `startPitId` field. */
  startPitId?: Maybe<StringFilter>;
  /** Filter by the object’s `opponentTeamId` field. */
  opponentTeamId?: Maybe<StringFilter>;
  /** Filter by the object’s `r` field. */
  r?: Maybe<IntFilter>;
  /** Filter by the object’s `h` field. */
  h?: Maybe<IntFilter>;
  /** Filter by the object’s `e` field. */
  e?: Maybe<IntFilter>;
  /** Filter by the object’s `lob` field. */
  lob?: Maybe<IntFilter>;
  /** Filter by the object’s `lineup1BatId` field. */
  lineup1BatId?: Maybe<StringFilter>;
  /** Filter by the object’s `lineup1FldCd` field. */
  lineup1FldCd?: Maybe<IntFilter>;
  /** Filter by the object’s `lineup2BatId` field. */
  lineup2BatId?: Maybe<StringFilter>;
  /** Filter by the object’s `lineup2FldCd` field. */
  lineup2FldCd?: Maybe<IntFilter>;
  /** Filter by the object’s `lineup3BatId` field. */
  lineup3BatId?: Maybe<StringFilter>;
  /** Filter by the object’s `lineup3FldCd` field. */
  lineup3FldCd?: Maybe<IntFilter>;
  /** Filter by the object’s `lineup4BatId` field. */
  lineup4BatId?: Maybe<StringFilter>;
  /** Filter by the object’s `lineup4FldCd` field. */
  lineup4FldCd?: Maybe<IntFilter>;
  /** Filter by the object’s `lineup5BatId` field. */
  lineup5BatId?: Maybe<StringFilter>;
  /** Filter by the object’s `lineup5FldCd` field. */
  lineup5FldCd?: Maybe<IntFilter>;
  /** Filter by the object’s `lineup6BatId` field. */
  lineup6BatId?: Maybe<StringFilter>;
  /** Filter by the object’s `lineup6FldCd` field. */
  lineup6FldCd?: Maybe<IntFilter>;
  /** Filter by the object’s `lineup7BatId` field. */
  lineup7BatId?: Maybe<StringFilter>;
  /** Filter by the object’s `lineup7FldCd` field. */
  lineup7FldCd?: Maybe<IntFilter>;
  /** Filter by the object’s `lineup8BatId` field. */
  lineup8BatId?: Maybe<StringFilter>;
  /** Filter by the object’s `lineup8FldCd` field. */
  lineup8FldCd?: Maybe<IntFilter>;
  /** Filter by the object’s `lineup9BatId` field. */
  lineup9BatId?: Maybe<StringFilter>;
  /** Filter by the object’s `lineup9FldCd` field. */
  lineup9FldCd?: Maybe<IntFilter>;
  /** Filter by the object’s `finishPitId` field. */
  finishPitId?: Maybe<StringFilter>;
  /** Filter by the object’s `teamLeagueId` field. */
  teamLeagueId?: Maybe<StringFilter>;
  /** Filter by the object’s `lineTx` field. */
  lineTx?: Maybe<StringFilter>;
  /** Filter by the object’s `ab` field. */
  ab?: Maybe<IntFilter>;
  /** Filter by the object’s `double` field. */
  double?: Maybe<IntFilter>;
  /** Filter by the object’s `triple` field. */
  triple?: Maybe<IntFilter>;
  /** Filter by the object’s `hr` field. */
  hr?: Maybe<IntFilter>;
  /** Filter by the object’s `rbi` field. */
  rbi?: Maybe<IntFilter>;
  /** Filter by the object’s `sh` field. */
  sh?: Maybe<IntFilter>;
  /** Filter by the object’s `sf` field. */
  sf?: Maybe<IntFilter>;
  /** Filter by the object’s `hbp` field. */
  hbp?: Maybe<IntFilter>;
  /** Filter by the object’s `bb` field. */
  bb?: Maybe<IntFilter>;
  /** Filter by the object’s `ibb` field. */
  ibb?: Maybe<IntFilter>;
  /** Filter by the object’s `so` field. */
  so?: Maybe<IntFilter>;
  /** Filter by the object’s `sb` field. */
  sb?: Maybe<IntFilter>;
  /** Filter by the object’s `cs` field. */
  cs?: Maybe<IntFilter>;
  /** Filter by the object’s `gidp` field. */
  gidp?: Maybe<IntFilter>;
  /** Filter by the object’s `xi` field. */
  xi?: Maybe<IntFilter>;
  /** Filter by the object’s `pitcherCt` field. */
  pitcherCt?: Maybe<IntFilter>;
  /** Filter by the object’s `er` field. */
  er?: Maybe<IntFilter>;
  /** Filter by the object’s `ter` field. */
  ter?: Maybe<IntFilter>;
  /** Filter by the object’s `wp` field. */
  wp?: Maybe<IntFilter>;
  /** Filter by the object’s `bk` field. */
  bk?: Maybe<IntFilter>;
  /** Filter by the object’s `po` field. */
  po?: Maybe<IntFilter>;
  /** Filter by the object’s `a` field. */
  a?: Maybe<IntFilter>;
  /** Filter by the object’s `pb` field. */
  pb?: Maybe<IntFilter>;
  /** Filter by the object’s `dp` field. */
  dp?: Maybe<IntFilter>;
  /** Filter by the object’s `tp` field. */
  tp?: Maybe<IntFilter>;
  /** Filter by the object’s `lineup1BatNameTx` field. */
  lineup1BatNameTx?: Maybe<StringFilter>;
  /** Filter by the object’s `lineup2BatNameTx` field. */
  lineup2BatNameTx?: Maybe<StringFilter>;
  /** Filter by the object’s `lineup3BatNameTx` field. */
  lineup3BatNameTx?: Maybe<StringFilter>;
  /** Filter by the object’s `lineup4BatNameTx` field. */
  lineup4BatNameTx?: Maybe<StringFilter>;
  /** Filter by the object’s `lineup5BatNameTx` field. */
  lineup5BatNameTx?: Maybe<StringFilter>;
  /** Filter by the object’s `lineup6BatNameTx` field. */
  lineup6BatNameTx?: Maybe<StringFilter>;
  /** Filter by the object’s `lineup7BatNameTx` field. */
  lineup7BatNameTx?: Maybe<StringFilter>;
  /** Filter by the object’s `lineup8BatNameTx` field. */
  lineup8BatNameTx?: Maybe<StringFilter>;
  /** Filter by the object’s `lineup9BatNameTx` field. */
  lineup9BatNameTx?: Maybe<StringFilter>;
  /** Filter by the object’s `gameStart` field. */
  gameStart?: Maybe<DatetimeFilter>;
  /** Filter by the object’s `year` field. */
  year?: Maybe<IntFilter>;
  /** Checks for all expressions in this list. */
  and?: Maybe<Array<RetroTeamGameFilter>>;
  /** Checks for any expressions in this list. */
  or?: Maybe<Array<RetroTeamGameFilter>>;
  /** Negates the expression. */
  not?: Maybe<RetroTeamGameFilter>;
};

/** An input for mutations affecting `RetroTeamGame` */
export type RetroTeamGameInput = {
  gameId: Scalars['String'];
  batLast?: Maybe<Scalars['Boolean']>;
  teamId: Scalars['String'];
  startPitId?: Maybe<Scalars['String']>;
  opponentTeamId?: Maybe<Scalars['String']>;
  r?: Maybe<Scalars['Int']>;
  h?: Maybe<Scalars['Int']>;
  e?: Maybe<Scalars['Int']>;
  lob?: Maybe<Scalars['Int']>;
  lineup1BatId?: Maybe<Scalars['String']>;
  lineup1FldCd?: Maybe<Scalars['Int']>;
  lineup2BatId?: Maybe<Scalars['String']>;
  lineup2FldCd?: Maybe<Scalars['Int']>;
  lineup3BatId?: Maybe<Scalars['String']>;
  lineup3FldCd?: Maybe<Scalars['Int']>;
  lineup4BatId?: Maybe<Scalars['String']>;
  lineup4FldCd?: Maybe<Scalars['Int']>;
  lineup5BatId?: Maybe<Scalars['String']>;
  lineup5FldCd?: Maybe<Scalars['Int']>;
  lineup6BatId?: Maybe<Scalars['String']>;
  lineup6FldCd?: Maybe<Scalars['Int']>;
  lineup7BatId?: Maybe<Scalars['String']>;
  lineup7FldCd?: Maybe<Scalars['Int']>;
  lineup8BatId?: Maybe<Scalars['String']>;
  lineup8FldCd?: Maybe<Scalars['Int']>;
  lineup9BatId?: Maybe<Scalars['String']>;
  lineup9FldCd?: Maybe<Scalars['Int']>;
  finishPitId?: Maybe<Scalars['String']>;
  teamLeagueId?: Maybe<Scalars['String']>;
  lineTx?: Maybe<Scalars['String']>;
  ab?: Maybe<Scalars['Int']>;
  double?: Maybe<Scalars['Int']>;
  triple?: Maybe<Scalars['Int']>;
  hr?: Maybe<Scalars['Int']>;
  rbi?: Maybe<Scalars['Int']>;
  sh?: Maybe<Scalars['Int']>;
  sf?: Maybe<Scalars['Int']>;
  hbp?: Maybe<Scalars['Int']>;
  bb?: Maybe<Scalars['Int']>;
  ibb?: Maybe<Scalars['Int']>;
  so?: Maybe<Scalars['Int']>;
  sb?: Maybe<Scalars['Int']>;
  cs?: Maybe<Scalars['Int']>;
  gidp?: Maybe<Scalars['Int']>;
  xi?: Maybe<Scalars['Int']>;
  pitcherCt?: Maybe<Scalars['Int']>;
  er?: Maybe<Scalars['Int']>;
  ter?: Maybe<Scalars['Int']>;
  wp?: Maybe<Scalars['Int']>;
  bk?: Maybe<Scalars['Int']>;
  po?: Maybe<Scalars['Int']>;
  a?: Maybe<Scalars['Int']>;
  pb?: Maybe<Scalars['Int']>;
  dp?: Maybe<Scalars['Int']>;
  tp?: Maybe<Scalars['Int']>;
  lineup1BatNameTx?: Maybe<Scalars['String']>;
  lineup2BatNameTx?: Maybe<Scalars['String']>;
  lineup3BatNameTx?: Maybe<Scalars['String']>;
  lineup4BatNameTx?: Maybe<Scalars['String']>;
  lineup5BatNameTx?: Maybe<Scalars['String']>;
  lineup6BatNameTx?: Maybe<Scalars['String']>;
  lineup7BatNameTx?: Maybe<Scalars['String']>;
  lineup8BatNameTx?: Maybe<Scalars['String']>;
  lineup9BatNameTx?: Maybe<Scalars['String']>;
  gameStart?: Maybe<Scalars['Datetime']>;
  year?: Maybe<Scalars['Int']>;
};

/** Represents an update to a `RetroTeamGame`. Fields that are set will be updated. */
export type RetroTeamGamePatch = {
  gameId?: Maybe<Scalars['String']>;
  batLast?: Maybe<Scalars['Boolean']>;
  teamId?: Maybe<Scalars['String']>;
  startPitId?: Maybe<Scalars['String']>;
  opponentTeamId?: Maybe<Scalars['String']>;
  r?: Maybe<Scalars['Int']>;
  h?: Maybe<Scalars['Int']>;
  e?: Maybe<Scalars['Int']>;
  lob?: Maybe<Scalars['Int']>;
  lineup1BatId?: Maybe<Scalars['String']>;
  lineup1FldCd?: Maybe<Scalars['Int']>;
  lineup2BatId?: Maybe<Scalars['String']>;
  lineup2FldCd?: Maybe<Scalars['Int']>;
  lineup3BatId?: Maybe<Scalars['String']>;
  lineup3FldCd?: Maybe<Scalars['Int']>;
  lineup4BatId?: Maybe<Scalars['String']>;
  lineup4FldCd?: Maybe<Scalars['Int']>;
  lineup5BatId?: Maybe<Scalars['String']>;
  lineup5FldCd?: Maybe<Scalars['Int']>;
  lineup6BatId?: Maybe<Scalars['String']>;
  lineup6FldCd?: Maybe<Scalars['Int']>;
  lineup7BatId?: Maybe<Scalars['String']>;
  lineup7FldCd?: Maybe<Scalars['Int']>;
  lineup8BatId?: Maybe<Scalars['String']>;
  lineup8FldCd?: Maybe<Scalars['Int']>;
  lineup9BatId?: Maybe<Scalars['String']>;
  lineup9FldCd?: Maybe<Scalars['Int']>;
  finishPitId?: Maybe<Scalars['String']>;
  teamLeagueId?: Maybe<Scalars['String']>;
  lineTx?: Maybe<Scalars['String']>;
  ab?: Maybe<Scalars['Int']>;
  double?: Maybe<Scalars['Int']>;
  triple?: Maybe<Scalars['Int']>;
  hr?: Maybe<Scalars['Int']>;
  rbi?: Maybe<Scalars['Int']>;
  sh?: Maybe<Scalars['Int']>;
  sf?: Maybe<Scalars['Int']>;
  hbp?: Maybe<Scalars['Int']>;
  bb?: Maybe<Scalars['Int']>;
  ibb?: Maybe<Scalars['Int']>;
  so?: Maybe<Scalars['Int']>;
  sb?: Maybe<Scalars['Int']>;
  cs?: Maybe<Scalars['Int']>;
  gidp?: Maybe<Scalars['Int']>;
  xi?: Maybe<Scalars['Int']>;
  pitcherCt?: Maybe<Scalars['Int']>;
  er?: Maybe<Scalars['Int']>;
  ter?: Maybe<Scalars['Int']>;
  wp?: Maybe<Scalars['Int']>;
  bk?: Maybe<Scalars['Int']>;
  po?: Maybe<Scalars['Int']>;
  a?: Maybe<Scalars['Int']>;
  pb?: Maybe<Scalars['Int']>;
  dp?: Maybe<Scalars['Int']>;
  tp?: Maybe<Scalars['Int']>;
  lineup1BatNameTx?: Maybe<Scalars['String']>;
  lineup2BatNameTx?: Maybe<Scalars['String']>;
  lineup3BatNameTx?: Maybe<Scalars['String']>;
  lineup4BatNameTx?: Maybe<Scalars['String']>;
  lineup5BatNameTx?: Maybe<Scalars['String']>;
  lineup6BatNameTx?: Maybe<Scalars['String']>;
  lineup7BatNameTx?: Maybe<Scalars['String']>;
  lineup8BatNameTx?: Maybe<Scalars['String']>;
  lineup9BatNameTx?: Maybe<Scalars['String']>;
  gameStart?: Maybe<Scalars['Datetime']>;
  year?: Maybe<Scalars['Int']>;
};

/** A connection to a list of `RetroTeamGame` values. */
export type RetroTeamGamesConnection = {
  __typename?: 'RetroTeamGamesConnection';
  /** A list of `RetroTeamGame` objects. */
  nodes: Array<Maybe<RetroTeamGame>>;
  /** A list of edges which contains the `RetroTeamGame` and cursor to aid in pagination. */
  edges: Array<RetroTeamGamesEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `RetroTeamGame` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `RetroTeamGame` edge in the connection. */
export type RetroTeamGamesEdge = {
  __typename?: 'RetroTeamGamesEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `RetroTeamGame` at the end of the edge. */
  node?: Maybe<RetroTeamGame>;
};

/** Methods to use when ordering `RetroTeamGame`. */
export enum RetroTeamGamesOrderBy {
  Natural = 'NATURAL',
  GameIdAsc = 'GAME_ID_ASC',
  GameIdDesc = 'GAME_ID_DESC',
  BatLastAsc = 'BAT_LAST_ASC',
  BatLastDesc = 'BAT_LAST_DESC',
  TeamIdAsc = 'TEAM_ID_ASC',
  TeamIdDesc = 'TEAM_ID_DESC',
  StartPitIdAsc = 'START_PIT_ID_ASC',
  StartPitIdDesc = 'START_PIT_ID_DESC',
  OpponentTeamIdAsc = 'OPPONENT_TEAM_ID_ASC',
  OpponentTeamIdDesc = 'OPPONENT_TEAM_ID_DESC',
  RAsc = 'R_ASC',
  RDesc = 'R_DESC',
  HAsc = 'H_ASC',
  HDesc = 'H_DESC',
  EAsc = 'E_ASC',
  EDesc = 'E_DESC',
  LobAsc = 'LOB_ASC',
  LobDesc = 'LOB_DESC',
  Lineup1BatIdAsc = 'LINEUP1_BAT_ID_ASC',
  Lineup1BatIdDesc = 'LINEUP1_BAT_ID_DESC',
  Lineup1FldCdAsc = 'LINEUP1_FLD_CD_ASC',
  Lineup1FldCdDesc = 'LINEUP1_FLD_CD_DESC',
  Lineup2BatIdAsc = 'LINEUP2_BAT_ID_ASC',
  Lineup2BatIdDesc = 'LINEUP2_BAT_ID_DESC',
  Lineup2FldCdAsc = 'LINEUP2_FLD_CD_ASC',
  Lineup2FldCdDesc = 'LINEUP2_FLD_CD_DESC',
  Lineup3BatIdAsc = 'LINEUP3_BAT_ID_ASC',
  Lineup3BatIdDesc = 'LINEUP3_BAT_ID_DESC',
  Lineup3FldCdAsc = 'LINEUP3_FLD_CD_ASC',
  Lineup3FldCdDesc = 'LINEUP3_FLD_CD_DESC',
  Lineup4BatIdAsc = 'LINEUP4_BAT_ID_ASC',
  Lineup4BatIdDesc = 'LINEUP4_BAT_ID_DESC',
  Lineup4FldCdAsc = 'LINEUP4_FLD_CD_ASC',
  Lineup4FldCdDesc = 'LINEUP4_FLD_CD_DESC',
  Lineup5BatIdAsc = 'LINEUP5_BAT_ID_ASC',
  Lineup5BatIdDesc = 'LINEUP5_BAT_ID_DESC',
  Lineup5FldCdAsc = 'LINEUP5_FLD_CD_ASC',
  Lineup5FldCdDesc = 'LINEUP5_FLD_CD_DESC',
  Lineup6BatIdAsc = 'LINEUP6_BAT_ID_ASC',
  Lineup6BatIdDesc = 'LINEUP6_BAT_ID_DESC',
  Lineup6FldCdAsc = 'LINEUP6_FLD_CD_ASC',
  Lineup6FldCdDesc = 'LINEUP6_FLD_CD_DESC',
  Lineup7BatIdAsc = 'LINEUP7_BAT_ID_ASC',
  Lineup7BatIdDesc = 'LINEUP7_BAT_ID_DESC',
  Lineup7FldCdAsc = 'LINEUP7_FLD_CD_ASC',
  Lineup7FldCdDesc = 'LINEUP7_FLD_CD_DESC',
  Lineup8BatIdAsc = 'LINEUP8_BAT_ID_ASC',
  Lineup8BatIdDesc = 'LINEUP8_BAT_ID_DESC',
  Lineup8FldCdAsc = 'LINEUP8_FLD_CD_ASC',
  Lineup8FldCdDesc = 'LINEUP8_FLD_CD_DESC',
  Lineup9BatIdAsc = 'LINEUP9_BAT_ID_ASC',
  Lineup9BatIdDesc = 'LINEUP9_BAT_ID_DESC',
  Lineup9FldCdAsc = 'LINEUP9_FLD_CD_ASC',
  Lineup9FldCdDesc = 'LINEUP9_FLD_CD_DESC',
  FinishPitIdAsc = 'FINISH_PIT_ID_ASC',
  FinishPitIdDesc = 'FINISH_PIT_ID_DESC',
  TeamLeagueIdAsc = 'TEAM_LEAGUE_ID_ASC',
  TeamLeagueIdDesc = 'TEAM_LEAGUE_ID_DESC',
  LineTxAsc = 'LINE_TX_ASC',
  LineTxDesc = 'LINE_TX_DESC',
  AbAsc = 'AB_ASC',
  AbDesc = 'AB_DESC',
  DoubleAsc = 'DOUBLE_ASC',
  DoubleDesc = 'DOUBLE_DESC',
  TripleAsc = 'TRIPLE_ASC',
  TripleDesc = 'TRIPLE_DESC',
  HrAsc = 'HR_ASC',
  HrDesc = 'HR_DESC',
  RbiAsc = 'RBI_ASC',
  RbiDesc = 'RBI_DESC',
  ShAsc = 'SH_ASC',
  ShDesc = 'SH_DESC',
  SfAsc = 'SF_ASC',
  SfDesc = 'SF_DESC',
  HbpAsc = 'HBP_ASC',
  HbpDesc = 'HBP_DESC',
  BbAsc = 'BB_ASC',
  BbDesc = 'BB_DESC',
  IbbAsc = 'IBB_ASC',
  IbbDesc = 'IBB_DESC',
  SoAsc = 'SO_ASC',
  SoDesc = 'SO_DESC',
  SbAsc = 'SB_ASC',
  SbDesc = 'SB_DESC',
  CsAsc = 'CS_ASC',
  CsDesc = 'CS_DESC',
  GidpAsc = 'GIDP_ASC',
  GidpDesc = 'GIDP_DESC',
  XiAsc = 'XI_ASC',
  XiDesc = 'XI_DESC',
  PitcherCtAsc = 'PITCHER_CT_ASC',
  PitcherCtDesc = 'PITCHER_CT_DESC',
  ErAsc = 'ER_ASC',
  ErDesc = 'ER_DESC',
  TerAsc = 'TER_ASC',
  TerDesc = 'TER_DESC',
  WpAsc = 'WP_ASC',
  WpDesc = 'WP_DESC',
  BkAsc = 'BK_ASC',
  BkDesc = 'BK_DESC',
  PoAsc = 'PO_ASC',
  PoDesc = 'PO_DESC',
  AAsc = 'A_ASC',
  ADesc = 'A_DESC',
  PbAsc = 'PB_ASC',
  PbDesc = 'PB_DESC',
  DpAsc = 'DP_ASC',
  DpDesc = 'DP_DESC',
  TpAsc = 'TP_ASC',
  TpDesc = 'TP_DESC',
  Lineup1BatNameTxAsc = 'LINEUP1_BAT_NAME_TX_ASC',
  Lineup1BatNameTxDesc = 'LINEUP1_BAT_NAME_TX_DESC',
  Lineup2BatNameTxAsc = 'LINEUP2_BAT_NAME_TX_ASC',
  Lineup2BatNameTxDesc = 'LINEUP2_BAT_NAME_TX_DESC',
  Lineup3BatNameTxAsc = 'LINEUP3_BAT_NAME_TX_ASC',
  Lineup3BatNameTxDesc = 'LINEUP3_BAT_NAME_TX_DESC',
  Lineup4BatNameTxAsc = 'LINEUP4_BAT_NAME_TX_ASC',
  Lineup4BatNameTxDesc = 'LINEUP4_BAT_NAME_TX_DESC',
  Lineup5BatNameTxAsc = 'LINEUP5_BAT_NAME_TX_ASC',
  Lineup5BatNameTxDesc = 'LINEUP5_BAT_NAME_TX_DESC',
  Lineup6BatNameTxAsc = 'LINEUP6_BAT_NAME_TX_ASC',
  Lineup6BatNameTxDesc = 'LINEUP6_BAT_NAME_TX_DESC',
  Lineup7BatNameTxAsc = 'LINEUP7_BAT_NAME_TX_ASC',
  Lineup7BatNameTxDesc = 'LINEUP7_BAT_NAME_TX_DESC',
  Lineup8BatNameTxAsc = 'LINEUP8_BAT_NAME_TX_ASC',
  Lineup8BatNameTxDesc = 'LINEUP8_BAT_NAME_TX_DESC',
  Lineup9BatNameTxAsc = 'LINEUP9_BAT_NAME_TX_ASC',
  Lineup9BatNameTxDesc = 'LINEUP9_BAT_NAME_TX_DESC',
  GameStartAsc = 'GAME_START_ASC',
  GameStartDesc = 'GAME_START_DESC',
  YearAsc = 'YEAR_ASC',
  YearDesc = 'YEAR_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

/** A filter to be used against String fields. All fields are combined with a logical ‘and.’ */
export type StringFilter = {
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: Maybe<Scalars['Boolean']>;
  /** Equal to the specified value. */
  equalTo?: Maybe<Scalars['String']>;
  /** Not equal to the specified value. */
  notEqualTo?: Maybe<Scalars['String']>;
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: Maybe<Scalars['String']>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: Maybe<Scalars['String']>;
  /** Included in the specified list. */
  in?: Maybe<Array<Scalars['String']>>;
  /** Not included in the specified list. */
  notIn?: Maybe<Array<Scalars['String']>>;
  /** Less than the specified value. */
  lessThan?: Maybe<Scalars['String']>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: Maybe<Scalars['String']>;
  /** Greater than the specified value. */
  greaterThan?: Maybe<Scalars['String']>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: Maybe<Scalars['String']>;
  /** Contains the specified string (case-sensitive). */
  includes?: Maybe<Scalars['String']>;
  /** Does not contain the specified string (case-sensitive). */
  notIncludes?: Maybe<Scalars['String']>;
  /** Contains the specified string (case-insensitive). */
  includesInsensitive?: Maybe<Scalars['String']>;
  /** Does not contain the specified string (case-insensitive). */
  notIncludesInsensitive?: Maybe<Scalars['String']>;
  /** Starts with the specified string (case-sensitive). */
  startsWith?: Maybe<Scalars['String']>;
  /** Does not start with the specified string (case-sensitive). */
  notStartsWith?: Maybe<Scalars['String']>;
  /** Starts with the specified string (case-insensitive). */
  startsWithInsensitive?: Maybe<Scalars['String']>;
  /** Does not start with the specified string (case-insensitive). */
  notStartsWithInsensitive?: Maybe<Scalars['String']>;
  /** Ends with the specified string (case-sensitive). */
  endsWith?: Maybe<Scalars['String']>;
  /** Does not end with the specified string (case-sensitive). */
  notEndsWith?: Maybe<Scalars['String']>;
  /** Ends with the specified string (case-insensitive). */
  endsWithInsensitive?: Maybe<Scalars['String']>;
  /** Does not end with the specified string (case-insensitive). */
  notEndsWithInsensitive?: Maybe<Scalars['String']>;
  /**
   * Matches the specified pattern (case-sensitive). An underscore (_) matches any
   * single character; a percent sign (%) matches any sequence of zero or more characters.
   */
  like?: Maybe<Scalars['String']>;
  /**
   * Does not match the specified pattern (case-sensitive). An underscore (_)
   * matches any single character; a percent sign (%) matches any sequence of zero
   * or more characters.
   */
  notLike?: Maybe<Scalars['String']>;
  /**
   * Matches the specified pattern (case-insensitive). An underscore (_) matches
   * any single character; a percent sign (%) matches any sequence of zero or more characters.
   */
  likeInsensitive?: Maybe<Scalars['String']>;
  /**
   * Does not match the specified pattern (case-insensitive). An underscore (_)
   * matches any single character; a percent sign (%) matches any sequence of zero
   * or more characters.
   */
  notLikeInsensitive?: Maybe<Scalars['String']>;
  /** Equal to the specified value (case-insensitive). */
  equalToInsensitive?: Maybe<Scalars['String']>;
  /** Not equal to the specified value (case-insensitive). */
  notEqualToInsensitive?: Maybe<Scalars['String']>;
  /** Not equal to the specified value, treating null like an ordinary value (case-insensitive). */
  distinctFromInsensitive?: Maybe<Scalars['String']>;
  /** Equal to the specified value, treating null like an ordinary value (case-insensitive). */
  notDistinctFromInsensitive?: Maybe<Scalars['String']>;
  /** Included in the specified list (case-insensitive). */
  inInsensitive?: Maybe<Array<Scalars['String']>>;
  /** Not included in the specified list (case-insensitive). */
  notInInsensitive?: Maybe<Array<Scalars['String']>>;
  /** Less than the specified value (case-insensitive). */
  lessThanInsensitive?: Maybe<Scalars['String']>;
  /** Less than or equal to the specified value (case-insensitive). */
  lessThanOrEqualToInsensitive?: Maybe<Scalars['String']>;
  /** Greater than the specified value (case-insensitive). */
  greaterThanInsensitive?: Maybe<Scalars['String']>;
  /** Greater than or equal to the specified value (case-insensitive). */
  greaterThanOrEqualToInsensitive?: Maybe<Scalars['String']>;
};

/** All input for the `updateLahmanBattingByPlayerIdAndYearAndStint` mutation. */
export type UpdateLahmanBattingByPlayerIdAndYearAndStintInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `LahmanBatting` being updated. */
  lahmanBattingPatch: LahmanBattingPatch;
  playerId: Scalars['String'];
  year: Scalars['Int'];
  stint: Scalars['Int'];
};

/** All input for the `updateLahmanBatting` mutation. */
export type UpdateLahmanBattingInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `LahmanBatting` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `LahmanBatting` being updated. */
  lahmanBattingPatch: LahmanBattingPatch;
};

/** The output of our update `LahmanBatting` mutation. */
export type UpdateLahmanBattingPayload = {
  __typename?: 'UpdateLahmanBattingPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `LahmanBatting` that was updated by this mutation. */
  lahmanBatting?: Maybe<LahmanBatting>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `LahmanPerson` that is related to this `LahmanBatting`. */
  lahmanPersonByPlayerId?: Maybe<LahmanPerson>;
  /** An edge for our `LahmanBatting`. May be used by Relay 1. */
  lahmanBattingEdge?: Maybe<LahmanBattingsEdge>;
};


/** The output of our update `LahmanBatting` mutation. */
export type UpdateLahmanBattingPayloadLahmanBattingEdgeArgs = {
  orderBy?: Maybe<Array<LahmanBattingsOrderBy>>;
};

/** All input for the `updateLahmanBattingpostByPlayerIdAndYearAndRound` mutation. */
export type UpdateLahmanBattingpostByPlayerIdAndYearAndRoundInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `LahmanBattingpost` being updated. */
  lahmanBattingpostPatch: LahmanBattingpostPatch;
  playerId: Scalars['String'];
  year: Scalars['Int'];
  round: Scalars['String'];
};

/** All input for the `updateLahmanBattingpost` mutation. */
export type UpdateLahmanBattingpostInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `LahmanBattingpost` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `LahmanBattingpost` being updated. */
  lahmanBattingpostPatch: LahmanBattingpostPatch;
};

/** The output of our update `LahmanBattingpost` mutation. */
export type UpdateLahmanBattingpostPayload = {
  __typename?: 'UpdateLahmanBattingpostPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `LahmanBattingpost` that was updated by this mutation. */
  lahmanBattingpost?: Maybe<LahmanBattingpost>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** An edge for our `LahmanBattingpost`. May be used by Relay 1. */
  lahmanBattingpostEdge?: Maybe<LahmanBattingpostsEdge>;
};


/** The output of our update `LahmanBattingpost` mutation. */
export type UpdateLahmanBattingpostPayloadLahmanBattingpostEdgeArgs = {
  orderBy?: Maybe<Array<LahmanBattingpostsOrderBy>>;
};

/** All input for the `updateLahmanFieldingByPlayerIdAndYearAndStintAndPos` mutation. */
export type UpdateLahmanFieldingByPlayerIdAndYearAndStintAndPosInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `LahmanFielding` being updated. */
  lahmanFieldingPatch: LahmanFieldingPatch;
  playerId: Scalars['String'];
  year: Scalars['Int'];
  stint: Scalars['Int'];
  pos: Scalars['String'];
};

/** All input for the `updateLahmanFielding` mutation. */
export type UpdateLahmanFieldingInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `LahmanFielding` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `LahmanFielding` being updated. */
  lahmanFieldingPatch: LahmanFieldingPatch;
};

/** The output of our update `LahmanFielding` mutation. */
export type UpdateLahmanFieldingPayload = {
  __typename?: 'UpdateLahmanFieldingPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `LahmanFielding` that was updated by this mutation. */
  lahmanFielding?: Maybe<LahmanFielding>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** An edge for our `LahmanFielding`. May be used by Relay 1. */
  lahmanFieldingEdge?: Maybe<LahmanFieldingsEdge>;
};


/** The output of our update `LahmanFielding` mutation. */
export type UpdateLahmanFieldingPayloadLahmanFieldingEdgeArgs = {
  orderBy?: Maybe<Array<LahmanFieldingsOrderBy>>;
};

/** All input for the `updateLahmanFieldingpostByPlayerIdAndYearAndRoundAndPos` mutation. */
export type UpdateLahmanFieldingpostByPlayerIdAndYearAndRoundAndPosInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `LahmanFieldingpost` being updated. */
  lahmanFieldingpostPatch: LahmanFieldingpostPatch;
  playerId: Scalars['String'];
  year: Scalars['Int'];
  round: Scalars['String'];
  pos: Scalars['String'];
};

/** All input for the `updateLahmanFieldingpost` mutation. */
export type UpdateLahmanFieldingpostInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `LahmanFieldingpost` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `LahmanFieldingpost` being updated. */
  lahmanFieldingpostPatch: LahmanFieldingpostPatch;
};

/** The output of our update `LahmanFieldingpost` mutation. */
export type UpdateLahmanFieldingpostPayload = {
  __typename?: 'UpdateLahmanFieldingpostPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `LahmanFieldingpost` that was updated by this mutation. */
  lahmanFieldingpost?: Maybe<LahmanFieldingpost>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** An edge for our `LahmanFieldingpost`. May be used by Relay 1. */
  lahmanFieldingpostEdge?: Maybe<LahmanFieldingpostsEdge>;
};


/** The output of our update `LahmanFieldingpost` mutation. */
export type UpdateLahmanFieldingpostPayloadLahmanFieldingpostEdgeArgs = {
  orderBy?: Maybe<Array<LahmanFieldingpostsOrderBy>>;
};

/** All input for the `updateLahmanParkByParkKey` mutation. */
export type UpdateLahmanParkByParkKeyInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `LahmanPark` being updated. */
  lahmanParkPatch: LahmanParkPatch;
  parkKey: Scalars['String'];
};

/** All input for the `updateLahmanPark` mutation. */
export type UpdateLahmanParkInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `LahmanPark` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `LahmanPark` being updated. */
  lahmanParkPatch: LahmanParkPatch;
};

/** The output of our update `LahmanPark` mutation. */
export type UpdateLahmanParkPayload = {
  __typename?: 'UpdateLahmanParkPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `LahmanPark` that was updated by this mutation. */
  lahmanPark?: Maybe<LahmanPark>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** An edge for our `LahmanPark`. May be used by Relay 1. */
  lahmanParkEdge?: Maybe<LahmanParksEdge>;
};


/** The output of our update `LahmanPark` mutation. */
export type UpdateLahmanParkPayloadLahmanParkEdgeArgs = {
  orderBy?: Maybe<Array<LahmanParksOrderBy>>;
};

/** All input for the `updateLahmanPersonByPlayerId` mutation. */
export type UpdateLahmanPersonByPlayerIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `LahmanPerson` being updated. */
  lahmanPersonPatch: LahmanPersonPatch;
  playerId: Scalars['String'];
};

/** All input for the `updateLahmanPersonByRetroId` mutation. */
export type UpdateLahmanPersonByRetroIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `LahmanPerson` being updated. */
  lahmanPersonPatch: LahmanPersonPatch;
  retroId: Scalars['String'];
};

/** All input for the `updateLahmanPerson` mutation. */
export type UpdateLahmanPersonInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `LahmanPerson` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `LahmanPerson` being updated. */
  lahmanPersonPatch: LahmanPersonPatch;
};

/** The output of our update `LahmanPerson` mutation. */
export type UpdateLahmanPersonPayload = {
  __typename?: 'UpdateLahmanPersonPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `LahmanPerson` that was updated by this mutation. */
  lahmanPerson?: Maybe<LahmanPerson>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** An edge for our `LahmanPerson`. May be used by Relay 1. */
  lahmanPersonEdge?: Maybe<LahmanPeopleEdge>;
};


/** The output of our update `LahmanPerson` mutation. */
export type UpdateLahmanPersonPayloadLahmanPersonEdgeArgs = {
  orderBy?: Maybe<Array<LahmanPeopleOrderBy>>;
};

/** All input for the `updateLahmanPitchingByPlayerIdAndYearAndStint` mutation. */
export type UpdateLahmanPitchingByPlayerIdAndYearAndStintInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `LahmanPitching` being updated. */
  lahmanPitchingPatch: LahmanPitchingPatch;
  playerId: Scalars['String'];
  year: Scalars['Int'];
  stint: Scalars['Int'];
};

/** All input for the `updateLahmanPitching` mutation. */
export type UpdateLahmanPitchingInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `LahmanPitching` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `LahmanPitching` being updated. */
  lahmanPitchingPatch: LahmanPitchingPatch;
};

/** The output of our update `LahmanPitching` mutation. */
export type UpdateLahmanPitchingPayload = {
  __typename?: 'UpdateLahmanPitchingPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `LahmanPitching` that was updated by this mutation. */
  lahmanPitching?: Maybe<LahmanPitching>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `LahmanPerson` that is related to this `LahmanPitching`. */
  lahmanPersonByPlayerId?: Maybe<LahmanPerson>;
  /** An edge for our `LahmanPitching`. May be used by Relay 1. */
  lahmanPitchingEdge?: Maybe<LahmanPitchingsEdge>;
};


/** The output of our update `LahmanPitching` mutation. */
export type UpdateLahmanPitchingPayloadLahmanPitchingEdgeArgs = {
  orderBy?: Maybe<Array<LahmanPitchingsOrderBy>>;
};

/** All input for the `updateLahmanPitchingpostByPlayerIdAndYearAndRound` mutation. */
export type UpdateLahmanPitchingpostByPlayerIdAndYearAndRoundInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `LahmanPitchingpost` being updated. */
  lahmanPitchingpostPatch: LahmanPitchingpostPatch;
  playerId: Scalars['String'];
  year: Scalars['Int'];
  round: Scalars['String'];
};

/** All input for the `updateLahmanPitchingpost` mutation. */
export type UpdateLahmanPitchingpostInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `LahmanPitchingpost` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `LahmanPitchingpost` being updated. */
  lahmanPitchingpostPatch: LahmanPitchingpostPatch;
};

/** The output of our update `LahmanPitchingpost` mutation. */
export type UpdateLahmanPitchingpostPayload = {
  __typename?: 'UpdateLahmanPitchingpostPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `LahmanPitchingpost` that was updated by this mutation. */
  lahmanPitchingpost?: Maybe<LahmanPitchingpost>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `LahmanPerson` that is related to this `LahmanPitchingpost`. */
  lahmanPersonByPlayerId?: Maybe<LahmanPerson>;
  /** An edge for our `LahmanPitchingpost`. May be used by Relay 1. */
  lahmanPitchingpostEdge?: Maybe<LahmanPitchingpostsEdge>;
};


/** The output of our update `LahmanPitchingpost` mutation. */
export type UpdateLahmanPitchingpostPayloadLahmanPitchingpostEdgeArgs = {
  orderBy?: Maybe<Array<LahmanPitchingpostsOrderBy>>;
};

/** All input for the `updateLahmanSalaryByPlayerIdAndYearAndTeamId` mutation. */
export type UpdateLahmanSalaryByPlayerIdAndYearAndTeamIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `LahmanSalary` being updated. */
  lahmanSalaryPatch: LahmanSalaryPatch;
  playerId: Scalars['String'];
  year: Scalars['Int'];
  teamId: Scalars['String'];
};

/** All input for the `updateLahmanSalary` mutation. */
export type UpdateLahmanSalaryInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `LahmanSalary` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `LahmanSalary` being updated. */
  lahmanSalaryPatch: LahmanSalaryPatch;
};

/** The output of our update `LahmanSalary` mutation. */
export type UpdateLahmanSalaryPayload = {
  __typename?: 'UpdateLahmanSalaryPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `LahmanSalary` that was updated by this mutation. */
  lahmanSalary?: Maybe<LahmanSalary>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `LahmanPerson` that is related to this `LahmanSalary`. */
  lahmanPersonByPlayerId?: Maybe<LahmanPerson>;
  /** An edge for our `LahmanSalary`. May be used by Relay 1. */
  lahmanSalaryEdge?: Maybe<LahmanSalariesEdge>;
};


/** The output of our update `LahmanSalary` mutation. */
export type UpdateLahmanSalaryPayloadLahmanSalaryEdgeArgs = {
  orderBy?: Maybe<Array<LahmanSalariesOrderBy>>;
};

/** All input for the `updateLahmanTeamByTeamIdAndYear` mutation. */
export type UpdateLahmanTeamByTeamIdAndYearInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `LahmanTeam` being updated. */
  lahmanTeamPatch: LahmanTeamPatch;
  teamId: Scalars['String'];
  year: Scalars['Int'];
};

/** All input for the `updateLahmanTeamByTeamIdRetroAndYear` mutation. */
export type UpdateLahmanTeamByTeamIdRetroAndYearInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `LahmanTeam` being updated. */
  lahmanTeamPatch: LahmanTeamPatch;
  teamIdRetro: Scalars['String'];
  year: Scalars['Int'];
};

/** All input for the `updateLahmanTeam` mutation. */
export type UpdateLahmanTeamInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `LahmanTeam` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `LahmanTeam` being updated. */
  lahmanTeamPatch: LahmanTeamPatch;
};

/** The output of our update `LahmanTeam` mutation. */
export type UpdateLahmanTeamPayload = {
  __typename?: 'UpdateLahmanTeamPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `LahmanTeam` that was updated by this mutation. */
  lahmanTeam?: Maybe<LahmanTeam>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** An edge for our `LahmanTeam`. May be used by Relay 1. */
  lahmanTeamEdge?: Maybe<LahmanTeamsEdge>;
};


/** The output of our update `LahmanTeam` mutation. */
export type UpdateLahmanTeamPayloadLahmanTeamEdgeArgs = {
  orderBy?: Maybe<Array<LahmanTeamsOrderBy>>;
};

/** All input for the `updateRetroBattingByPlayerIdAndGameId` mutation. */
export type UpdateRetroBattingByPlayerIdAndGameIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `RetroBatting` being updated. */
  retroBattingPatch: RetroBattingPatch;
  playerId: Scalars['String'];
  gameId: Scalars['String'];
};

/** All input for the `updateRetroBatting` mutation. */
export type UpdateRetroBattingInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `RetroBatting` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `RetroBatting` being updated. */
  retroBattingPatch: RetroBattingPatch;
};

/** The output of our update `RetroBatting` mutation. */
export type UpdateRetroBattingPayload = {
  __typename?: 'UpdateRetroBattingPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `RetroBatting` that was updated by this mutation. */
  retroBatting?: Maybe<RetroBatting>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `LahmanPerson` that is related to this `RetroBatting`. */
  lahmanPersonByPlayerId?: Maybe<LahmanPerson>;
  /** An edge for our `RetroBatting`. May be used by Relay 1. */
  retroBattingEdge?: Maybe<RetroBattingsEdge>;
};


/** The output of our update `RetroBatting` mutation. */
export type UpdateRetroBattingPayloadRetroBattingEdgeArgs = {
  orderBy?: Maybe<Array<RetroBattingsOrderBy>>;
};

/** All input for the `updateRetroEventByGameIdAndEventId` mutation. */
export type UpdateRetroEventByGameIdAndEventIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `RetroEvent` being updated. */
  retroEventPatch: RetroEventPatch;
  gameId: Scalars['String'];
  eventId: Scalars['Int'];
};

/** All input for the `updateRetroEvent` mutation. */
export type UpdateRetroEventInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `RetroEvent` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `RetroEvent` being updated. */
  retroEventPatch: RetroEventPatch;
};

/** The output of our update `RetroEvent` mutation. */
export type UpdateRetroEventPayload = {
  __typename?: 'UpdateRetroEventPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `RetroEvent` that was updated by this mutation. */
  retroEvent?: Maybe<RetroEvent>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `RetroGame` that is related to this `RetroEvent`. */
  retroGameByGameId?: Maybe<RetroGame>;
  /** Reads a single `LahmanPerson` that is related to this `RetroEvent`. */
  lahmanPersonByBatId?: Maybe<LahmanPerson>;
  /** Reads a single `LahmanPerson` that is related to this `RetroEvent`. */
  lahmanPersonByPitId?: Maybe<LahmanPerson>;
  /** An edge for our `RetroEvent`. May be used by Relay 1. */
  retroEventEdge?: Maybe<RetroEventsEdge>;
};


/** The output of our update `RetroEvent` mutation. */
export type UpdateRetroEventPayloadRetroEventEdgeArgs = {
  orderBy?: Maybe<Array<RetroEventsOrderBy>>;
};

/** All input for the `updateRetroFieldingByPlayerIdAndGameIdAndPos` mutation. */
export type UpdateRetroFieldingByPlayerIdAndGameIdAndPosInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `RetroFielding` being updated. */
  retroFieldingPatch: RetroFieldingPatch;
  playerId: Scalars['String'];
  gameId: Scalars['String'];
  pos: Scalars['String'];
};

/** All input for the `updateRetroFielding` mutation. */
export type UpdateRetroFieldingInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `RetroFielding` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `RetroFielding` being updated. */
  retroFieldingPatch: RetroFieldingPatch;
};

/** The output of our update `RetroFielding` mutation. */
export type UpdateRetroFieldingPayload = {
  __typename?: 'UpdateRetroFieldingPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `RetroFielding` that was updated by this mutation. */
  retroFielding?: Maybe<RetroFielding>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `LahmanPerson` that is related to this `RetroFielding`. */
  lahmanPersonByPlayerId?: Maybe<LahmanPerson>;
  /** An edge for our `RetroFielding`. May be used by Relay 1. */
  retroFieldingEdge?: Maybe<RetroFieldingsEdge>;
};


/** The output of our update `RetroFielding` mutation. */
export type UpdateRetroFieldingPayloadRetroFieldingEdgeArgs = {
  orderBy?: Maybe<Array<RetroFieldingsOrderBy>>;
};

/** All input for the `updateRetroGameByGameId` mutation. */
export type UpdateRetroGameByGameIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `RetroGame` being updated. */
  retroGamePatch: RetroGamePatch;
  gameId: Scalars['String'];
};

/** All input for the `updateRetroGame` mutation. */
export type UpdateRetroGameInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `RetroGame` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `RetroGame` being updated. */
  retroGamePatch: RetroGamePatch;
};

/** The output of our update `RetroGame` mutation. */
export type UpdateRetroGamePayload = {
  __typename?: 'UpdateRetroGamePayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `RetroGame` that was updated by this mutation. */
  retroGame?: Maybe<RetroGame>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `LahmanPerson` that is related to this `RetroGame`. */
  lahmanPersonByWinPitId?: Maybe<LahmanPerson>;
  /** Reads a single `LahmanPerson` that is related to this `RetroGame`. */
  lahmanPersonByLosePitId?: Maybe<LahmanPerson>;
  /** Reads a single `LahmanPerson` that is related to this `RetroGame`. */
  lahmanPersonBySavePitId?: Maybe<LahmanPerson>;
  /** Reads a single `LahmanPerson` that is related to this `RetroGame`. */
  lahmanPersonByGwrbiBatId?: Maybe<LahmanPerson>;
  /** An edge for our `RetroGame`. May be used by Relay 1. */
  retroGameEdge?: Maybe<RetroGamesEdge>;
};


/** The output of our update `RetroGame` mutation. */
export type UpdateRetroGamePayloadRetroGameEdgeArgs = {
  orderBy?: Maybe<Array<RetroGamesOrderBy>>;
};

/** All input for the `updateRetroPitchingByPlayerIdAndGameId` mutation. */
export type UpdateRetroPitchingByPlayerIdAndGameIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `RetroPitching` being updated. */
  retroPitchingPatch: RetroPitchingPatch;
  playerId: Scalars['String'];
  gameId: Scalars['String'];
};

/** All input for the `updateRetroPitching` mutation. */
export type UpdateRetroPitchingInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `RetroPitching` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `RetroPitching` being updated. */
  retroPitchingPatch: RetroPitchingPatch;
};

/** The output of our update `RetroPitching` mutation. */
export type UpdateRetroPitchingPayload = {
  __typename?: 'UpdateRetroPitchingPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `RetroPitching` that was updated by this mutation. */
  retroPitching?: Maybe<RetroPitching>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `LahmanPerson` that is related to this `RetroPitching`. */
  lahmanPersonByPlayerId?: Maybe<LahmanPerson>;
  /** An edge for our `RetroPitching`. May be used by Relay 1. */
  retroPitchingEdge?: Maybe<RetroPitchingsEdge>;
};


/** The output of our update `RetroPitching` mutation. */
export type UpdateRetroPitchingPayloadRetroPitchingEdgeArgs = {
  orderBy?: Maybe<Array<RetroPitchingsOrderBy>>;
};

/** All input for the `updateRetroTeamGameByTeamIdAndGameId` mutation. */
export type UpdateRetroTeamGameByTeamIdAndGameIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `RetroTeamGame` being updated. */
  retroTeamGamePatch: RetroTeamGamePatch;
  teamId: Scalars['String'];
  gameId: Scalars['String'];
};

/** All input for the `updateRetroTeamGame` mutation. */
export type UpdateRetroTeamGameInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `RetroTeamGame` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `RetroTeamGame` being updated. */
  retroTeamGamePatch: RetroTeamGamePatch;
};

/** The output of our update `RetroTeamGame` mutation. */
export type UpdateRetroTeamGamePayload = {
  __typename?: 'UpdateRetroTeamGamePayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `RetroTeamGame` that was updated by this mutation. */
  retroTeamGame?: Maybe<RetroTeamGame>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `LahmanTeam` that is related to this `RetroTeamGame`. */
  lahmanTeamByTeamIdAndYear?: Maybe<LahmanTeam>;
  /** An edge for our `RetroTeamGame`. May be used by Relay 1. */
  retroTeamGameEdge?: Maybe<RetroTeamGamesEdge>;
};


/** The output of our update `RetroTeamGame` mutation. */
export type UpdateRetroTeamGamePayloadRetroTeamGameEdgeArgs = {
  orderBy?: Maybe<Array<RetroTeamGamesOrderBy>>;
};

export type PersonByPlayerIdQueryVariables = Exact<{
  playerId: Scalars['String'];
}>;


export type PersonByPlayerIdQuery = { __typename?: 'Query', lahmanPersonByPlayerId?: Maybe<{ __typename?: 'LahmanPerson', nodeId: string, nameFirst?: Maybe<string>, nameLast?: Maybe<string>, bats?: Maybe<string>, weight?: Maybe<number>, height?: Maybe<number>, throws?: Maybe<string>, birthDate?: Maybe<any>, birthCity?: Maybe<string>, birthState?: Maybe<string>, birthCountry?: Maybe<string>, lahmanBattingsByPlayerId: { __typename?: 'LahmanBattingsConnection', edges: Array<{ __typename?: 'LahmanBattingsEdge', node?: Maybe<{ __typename?: 'LahmanBatting', year: number, teamId?: Maybe<string>, lgId?: Maybe<string>, g?: Maybe<number>, pa?: Maybe<number>, ab?: Maybe<number>, r?: Maybe<number>, h?: Maybe<number>, double?: Maybe<number>, triple?: Maybe<number>, hr?: Maybe<number>, rbi?: Maybe<number>, sb?: Maybe<number>, cs?: Maybe<number>, bb?: Maybe<number>, so?: Maybe<number>, ba?: Maybe<number>, obp?: Maybe<number>, slg?: Maybe<number>, ops?: Maybe<number>, gidp?: Maybe<number>, hbp?: Maybe<number>, sh?: Maybe<number>, sf?: Maybe<number>, ibb?: Maybe<number> }> }> }, lahmanPitchingsByPlayerId: { __typename?: 'LahmanPitchingsConnection', edges: Array<{ __typename?: 'LahmanPitchingsEdge', node?: Maybe<{ __typename?: 'LahmanPitching', year: number, teamId?: Maybe<string>, lgId?: Maybe<string>, w?: Maybe<number>, l?: Maybe<number>, era?: Maybe<number>, g?: Maybe<number>, gs?: Maybe<number>, gf?: Maybe<number>, cg?: Maybe<number>, sho?: Maybe<number>, sv?: Maybe<number>, ipOuts?: Maybe<number>, h?: Maybe<number>, r?: Maybe<number>, er?: Maybe<number>, hr?: Maybe<number>, bb?: Maybe<number>, ibb?: Maybe<number>, so?: Maybe<number>, hbp?: Maybe<number>, bk?: Maybe<number>, wp?: Maybe<number>, whip?: Maybe<number>, h9?: Maybe<number>, hr9?: Maybe<number>, bb9?: Maybe<number>, k9?: Maybe<number>, sow?: Maybe<number> }> }> } }> };

export const PersonByPlayerIdDocument = gql`
    query personByPlayerId($playerId: String!) {
  lahmanPersonByPlayerId(playerId: $playerId) {
    nodeId
    nameFirst
    nameLast
    bats
    weight
    height
    throws
    birthDate
    birthCity
    birthState
    birthCountry
    lahmanBattingsByPlayerId {
      edges {
        node {
          year
          teamId
          lgId
          g
          pa
          ab
          r
          h
          double
          triple
          hr
          rbi
          sb
          cs
          bb
          so
          ba
          obp
          slg
          ops
          gidp
          hbp
          sh
          sf
          ibb
        }
      }
    }
    lahmanPitchingsByPlayerId {
      edges {
        node {
          year
          teamId
          lgId
          w
          l
          era
          g
          gs
          gf
          cg
          sho
          sv
          ipOuts
          h
          r
          er
          hr
          bb
          ibb
          so
          hbp
          bk
          wp
          whip
          h9
          hr9
          bb9
          k9
          sow
        }
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class PersonByPlayerIdGQL extends Apollo.Query<PersonByPlayerIdQuery, PersonByPlayerIdQueryVariables> {
    document = PersonByPlayerIdDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }