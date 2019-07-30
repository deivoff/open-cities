/* eslint-disable react/jsx-no-undef */
// pages/Comments.js
import React, { Component } from 'react';
import Head from 'next/head';
import API from '../utils/api-client';
import { withSSR } from '../utils/_ssr';

require('../frontend/static/styles/main.styl');

class CommentsScreen extends Component {
  // TODO: use the new getDerivedStateFromProps?

  static defaultProps = {
    comments: []
  };

  state = {
    text: '',
    loading: false,
    error: null
  };

  handleTextChange = (e: any) => {
    this.setState({ text: e.target.value });
  };

  handleSubmit = async (e: any) => {
    e.preventDefault();

    this.setState({ loading: true, error: null });

    try {
      // Do some validations
      if (!this.state.text) {
        throw new Error('Empty comment not allowed');
      }
      // Send data to API endpoint
      await API.post('/api/comments', {
        comment: this.state.text
      });
      // Get the updated list
      // Update state
      this.setState({ error: null, text: '' });
    } catch (err) {
      this.setState({ error: err });
    } finally {
      this.setState({ loading: false });
    }
  };

  render() {
    const { loading, text, error } = this.state;

    return (
      <div {...this.props}>
        <Head>
          <title>Comments | Koa + Next.js</title>
        </Head>
        <div>
          <h1>Comments:</h1>
          <form onSubmit={this.handleSubmit}>
            <input type='text' value={text} onChange={this.handleTextChange} />
            <input
              type='submit'
              value={loading ? 'Loading...' : 'Submit'}
              disabled={loading}
            />
          </form>
          {error && <p>Error: {error}</p>}
        </div>
      </div>
    );
  }
}

export default withSSR()(CommentsScreen);
