import { useDeps, composeWithTracker, composeAll } from 'mantra-core';
import Component from '../components/home';
import Spinner from '../../core/components/spinner';
import configs from '../configs';

export const composer = ({context, clearErrors}, onData) => {
  onData(null, {});
};

export const depsMapper = (context, actions) => ({
  features: configs.features,
  social: configs.social,
  navigate: actions.navigate.navigate,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer, Spinner),
  useDeps(depsMapper)
)(Component);
