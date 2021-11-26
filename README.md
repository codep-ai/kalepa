VUE:
The composition API is really another way to do the same thing as before. Mainly:

* The local state in data is replaced by a call to ref/reactive.

* Hooks mounted, beforeDestroy, etc. are replaced by subscriptions to onMounted, onUnmounted etc.

* Declarations in watch are replaced by calls to watch.

* computed properties are replaced by a call to computed in an object passed to reactive.

* The setup function returns an object that contains a composition of all the things that have to remain accessible from outside the setup function, in particular from the template. And this feature replaces old methods.

I'd ask sth like: in what cases should it be used.

Nothing is deprecated, so you have now two ways to do the same thing and nothing prevents you from mixing if you want. Nothing except the composition API is better than the old way. And once you adopt it, you will completely abandon the old way of doing things.