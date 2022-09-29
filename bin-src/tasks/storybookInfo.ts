import getStorybookInfo from '../lib/getStorybookInfo';
import { createTask, transitionTo } from '../lib/tasks';
import { Context } from '../types';
import { initial, pending, success } from '../ui/tasks/storybookInfo';

export const setStorybookInfo = async (ctx: Context) => {
  ctx.storybook = (await getStorybookInfo(ctx)) as Context['storybook'];
  ctx.log.debug('storybook', ctx.storybook);
};

export default createTask({
  title: initial.title,
  skip: (ctx: Context) => ctx.skip,
  steps: [transitionTo(pending), setStorybookInfo, transitionTo(success, true)],
});
