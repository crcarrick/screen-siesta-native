import ExpoModulesCore
import UIKit

public class ScreenSiestaNativeModule: Module {
  private var bgTask: UIBackgroundTaskIdentifier = UIBackgroundTaskIdentifier.invalid
  private var elapsed: Double = 0.0

  private func start(_ value: Double) {
    self.stop()

    self.bgTask = UIApplication.shared.beginBackgroundTask(withName: "Screen Siesta Timer") {
      self.stop()
    }

    DispatchQueue.main.async() {
      Timer.scheduledTimer(withTimeInterval: 1.0, repeats: true) { timer in 
        self.elapsed += 1

        if self.elapsed <= value {
          self.sendEvent("onTick", [
            "value": self.elapsed
          ])
        } else {
          timer.invalidate()
          
          self.sendEvent("onExpire")
          self.stop()
        }
      }
    }
  }

  private func stop() {
    if self.bgTask != UIBackgroundTaskIdentifier.invalid {
      UIApplication.shared.endBackgroundTask(self.bgTask)

      self.bgTask = UIBackgroundTaskIdentifier.invalid
    }
  }

  public func definition() -> ModuleDefinition {
    Name("ScreenSiestaNative")

    Events("onExpire")
    Events("onTick")

    AsyncFunction("startTimer") { (value: Double) in
      self.start(value)
    }
  }
}
