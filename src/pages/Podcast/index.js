import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PlayerActions from '~/store/ducks/player';

import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  Container,
  EpisodeList,
  Episode,
  Title,
  Author,
  PlayButton,
  PlayButtonText,
  PodcastDetails,
  Background,
  Cover,
  BackButton,
  PodcastTitle,
} from './styles';

const Podcast = ({ navigation, setPodcastRequest }) => {
  const podcast = navigation.getParam('podcast');

  const handlePlay = (episodeId) => {
    setPodcastRequest(podcast, episodeId);
  };

  return (
    <Container>
      <EpisodeList
        ListHeaderComponent={() => (
          <PodcastDetails>
            <Background source={{ uri: podcast.cover }} blurRadius={5} />
            <Cover source={{ uri: podcast.cover }} />

            <BackButton onPress={() => navigation.goBack()}>
              <Icon name="arrow-back" color="#fff" size={24} />
            </BackButton>
            <PodcastTitle>{podcast.title}</PodcastTitle>

            <PlayButton onPress={() => handlePlay()}>
              <PlayButtonText>PLAY</PlayButtonText>
            </PlayButton>
          </PodcastDetails>
        )}
        data={podcast.tracks}
        keyExtractor={episode => String(episode.id)}
        renderItem={({ item: episode }) => (
          <Episode onPress={() => handlePlay(episode.id)}>
            <Title>{episode.title}</Title>
            <Author>{episode.artist}</Author>
          </Episode>
        )}
      />
    </Container>
  );
};

// const mapStateToProps = state => ({
//   player: state.player,
// });

const mapDispatchToProps = dispatch => bindActionCreators(PlayerActions, dispatch);

export default connect(
  null,
  mapDispatchToProps,
)(Podcast);
