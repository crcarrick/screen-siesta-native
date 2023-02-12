package expo.modules.screensiestanative

import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition

class ScreenSiestaNativeModule : Module() {
  override fun definition() = ModuleDefinition {
    Name("ScreenSiestaNative")

    Events("onTick")

    AsyncFunction("startTimer") { value: Double ->
      // Send an event to JavaScript.
      sendEvent("onChange", mapOf(
        "value" to value
      ))
    }

    // Sets constant properties on the module. Can take a dictionary or a closure that returns a dictionary.
    // Constants(
    //   "PI" to Math.PI
    // )

    // Defines a JavaScript synchronous function that runs the native code on the JavaScript thread.
    // Function("hello") {
    //   "Hello world! 👋"
    // }

    // Defines a JavaScript function that always returns a Promise and whose native code
    // is by default dispatched on the different thread than the JavaScript runtime runs on.
    // AsyncFunction("setValueAsync") { value: String ->
    //   // Send an event to JavaScript.
    //   sendEvent("onChange", mapOf(
    //     "value" to value
    //   ))
    // }

    // Enables the module to be used as a native view. Definition components that are accepted as part of
    // the view definition: Prop, Events.
    // View(ScreenSiestaNativeView::class) {
    //   // Defines a setter for the `name` prop.
    //   Prop("name") { view: ScreenSiestaNativeView, prop: String ->
    //     println(prop)
    //   }
    // }
  }
}
