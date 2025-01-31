import * as proposal from './proposal';
import * as vote from './vote';
import * as settings from './settings';
import * as deleteProposal from './delete-proposal';
import * as follow from './follow';
import * as unfollow from './unfollow';
import * as walletFollow from './walletFollow';
import * as walletUnfollow from './walletUnfollow';
import * as alias from './alias';
import * as subscribe from './subscribe';
import * as unsubscribe from './unsubscribe';

export default {
  proposal,
  vote,
  settings,
  'delete-proposal': deleteProposal,
  follow,
  unfollow,
  walletFollow,
  walletUnfollow,
  subscribe,
  unsubscribe,
  alias
};
