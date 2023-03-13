import { CounterSchema } from 'entities/Couner';
import { UserSchema } from 'entities/User';

export interface StateSchema {
    counter: CounterSchema;
    user: UserSchema;
}
