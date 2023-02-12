import {
  NativeModulesProxy,
  EventEmitter,
  Subscription,
} from 'expo-modules-core'

import { type TickEventPayload } from './ScreenSiestaNative.types'
import ScreenSiestaNativeModule from './ScreenSiestaNativeModule'

export async function startTimer(value: number) {
  return await ScreenSiestaNativeModule.startTimer(value)
}

const emitter = new EventEmitter(
  ScreenSiestaNativeModule ?? NativeModulesProxy.ScreenSiestaNative,
)

export function addTickListener(
  listener: (event: TickEventPayload) => void,
): Subscription {
  return emitter.addListener<TickEventPayload>('onTick', listener)
}

export { TickEventPayload }
