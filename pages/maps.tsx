import React from 'react';
import Head from 'next/head';
import { connect } from 'react-redux';
import { H1, Page, Card } from '../frontend/components/layout';
import { IUserSchema } from '../server/components/user/types';

// import { connect } from 'react-redux';
interface IMapsProps {
  profile?: IUserSchema;
}

const mapStateToProps = ({ profile }: any) => {
  return {
    profile
  };
};

const MapsScreen = ({ profile }: IMapsProps) => {
  return (
    <>
      <Head>
        <title>Открытые города | Мои карты</title>
      </Head>
      <Page.Wrapper>
        {JSON.stringify(profile) !== '{}' ? (
          <H1>Мои карты</H1>
        ) : (
          <H1>Вы не авторизованы в сервисе</H1>
        )}
        <Card>
          <Card.Title>Карта городского комфорта</Card.Title>
        </Card>
      </Page.Wrapper>
    </>
  );
};

export default connect(mapStateToProps)(MapsScreen);
