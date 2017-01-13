import {IEntityTags} from './IEntityTags';
import {Instance} from './instance';
import {InstanceCounts} from './instanceCounts';
import {Execution} from './execution';
import {ITask} from '../task/task.read.service';

// remnant from legacy code
interface IAsg {
  minSize: number;
  maxSize: number;
  desiredCapacity: number;
}

export interface ServerGroup {
  account: string;
  app?: string;
  asg?: IAsg;
  buildInfo?: any;
  category?: string;
  cloudProvider: string;
  cluster: string;
  entityTags?: IEntityTags;
  detail?: string;
  executions?: Execution[];
  instanceCounts: InstanceCounts;
  instanceType?: string;
  instances: Instance[];
  launchConfig?: any;
  loadBalancers?: string[];
  name: string;
  provider?: string;
  region: string;
  runningTasks?: ITask[];
  searchField?: string;
  stringVal?: string;
  tags?: any;
  type: string;
  vpcName?: string;
}