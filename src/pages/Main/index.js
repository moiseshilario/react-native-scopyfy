import React, { useEffect } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PodcastsActions from '~/store/ducks/podcasts';

import {
  Container, PodcastList, PageTitle, Podcast, Cover, Info, Title, Count,
} from './styles';

const Main = ({ podcasts, loadRequest, navigation }) => {
  useEffect(() => {
    loadRequest();
  }, [loadRequest]);

  const handlePodcastPress = podcast => navigation.navigate('Podcast', { podcast });

  return (
    <Container>
      <PodcastList
        ListHeaderComponent={() => <PageTitle>Podcasts</PageTitle>}
        data={podcasts}
        keyExtractor={podcast => String(podcast.id)}
        renderItem={({ item: podcast }) => (
          <Podcast onPress={() => handlePodcastPress(podcast)}>
            <Cover source={{ uri: podcast.cover }} />
            <Info>
              <Title>{podcast.title}</Title>
              <Count>{`${podcast.tracks.length} episodes`}</Count>
            </Info>
          </Podcast>
        )}
      />
    </Container>
  );
};

const mapStateToProps = state => ({
  podcasts: state.podcasts.data,
});

const mapDispatchToProps = dispatch => bindActionCreators(PodcastsActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);
