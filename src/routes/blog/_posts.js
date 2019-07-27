const posts = [
  {
    title: "Fear 😱",
    slug: "2019-06-13-fear",
    description: "A post about my fears when developing a project, how it affects me, and how I'm working to manage it",
    html: `
        <style>
        .container {
          width: 60%;
          font-family: "Open Sans", sans-serif;
          line-height: 1.33em;
        }
        blockquote {
          margin-left: 0.33em;
          padding: 0.1em 0.66em;
          background-color: hsla(0, 2%, 59%, 0.21);
        }
      </style>
      <p>
        I've moved from one project to another at work. This is the ~4th open-source
        codebase I've worked on this year. This moving around between projects has
        such a great experience as I’ve touched, refactored and added to some projects
        that have really interesting and demanding use-cases. Sadly there is this
        emotional pattern I keep seeing within myself:
      </p>
      <p>
        The first stage is anxiety, at the time this seems to come totally unexpected.
        If you've experienced anxiety, you will know that heart-crushing feeling of
        dread. Tuesday was when this really hit, as usual, I walked, talked it over
        with my girlfriend, felt nauseous, moved on.
      </p>
      <p>
        The second stage, I have this overpowering feeling of anger, producing this
        horrible desire to vent. I try to find safe outputs for this like exercise or
        screaming into a pillow. Sometimes I rant on Twitter (that's not that great.)
      </p>
      <blockquote class="svelte-yeyymg">
        <p>
          Why doesn't this thing work, WHY AM I A BAD DEVELOPER?, what if I write this
          wrong? And other thoughts.
        </p>
      </blockquote>
      <p>
        The third stage is manifested in a strong feeling of being overwhelmed, I have
        too many emotions or thoughts that want to express themselves, I forget dates,
        I forget time, I zone out.
        <em>I’m here at the point of writing this,</em>
      </p>
      <p>
        Having thought about this for some time today, the driving emotions are fear
        and anger brought on by change. Change is scary and is only heightened by
        large periods of my life where I had little to no emotional stability. My
        first reaction to this is to fight it. I either start running at the problem
        and either I will try to break the problem, or myself. This is not healthy and
        only seems to worsen the negativity that I feel.
      </p>
      <p>
        I hear from other developers that often when they find themselves in the same
        situation it manifests itself in a feeling of imposter syndrome, or writer's
        block. This reaction seems to resolve from a similar or if not the same
        emotional route. Although there is this additional shame component to it,
        imposter syndrome or writer's block seem largely passive or non-aggressive
        acts versus the more active or aggressively act of attacking the problem or
        myself. I don’t know if it is
        <strong>bad</strong>
        to feel anger as an emotion in these cases? I assume so as nobody talks about
        it.
      </p>
      <p>
        My therapist tells me that when emotions are imbalanced, problems arise. In
        this case, am I missing the balancing emotion, should I be focusing on trying
        to surface other feelings? For example, contentment that I have a new problem
        to solve.
      </p>
      <blockquote class="svelte-yeyymg">
        <p>The solution, is not there yet but I'm working on it 💪️.</p>
      </blockquote>
      <p>
        I have found that doing more projects makes this fear and anxiety less intense
        as I can use past experience to inspire resilience, each time it gets a wee
        bit less bad. Who knows by project 100, I will have this whole fear thing down
        and will be able to take emotions and situations like this in my stride.
      </p>
      <p>
        In the mean-time, I have found that stepping away from the problem and
        clearing my head can be good. A quick scream or a cry in the toilets, though
        this can all be quite difficult to do when you’re on the clock. Talking to
        others about the problem but maybe not dwell on it too much because that just
        ferments bad thoughts. Definitely getting off twitter.
      </p>
      <p>I'll get there eventually, I hope 🙂.</p>
      
		`
  }
];

posts.forEach(post => {
  post.html = post.html.replace(/^\t{3}/gm, "");
});

export default posts;
