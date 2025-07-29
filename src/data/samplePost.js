const samplePost = {
  userProfile: {
    userName: 'Aisha Johnson',
    userImage: 'https://i.pinimg.com/474x/bd/26/b7/bd26b704fca0c5e3fe68f10322bf65c0.jpg', // consistent with your attached image
    alt: 'profileimage',
    followBtn: true
  },
  userPost: {
    discription: `🚀 Exciting news! JavaScript ES2025 has just been released with native support for advanced pattern matching and pipeline operators. As a front-end engineer, I've been waiting for these features: they simplify data transformations and make async code easier to read.
    
How do you see ES2025 shaping future JS development? Let's discuss!`,
    postImage: 'https://media.licdn.com/dms/image/D4D12AQG56UPUtPJj0w/article-cover_image-shrink_600_2000/0/1669373321238?e=2147483647&v=beta&t=uUMorY6yjVASSX_Iy-VNu8eXkAMfkmY97PWk7zDKR0w',
    alt: 'JavaScript ES2025 launch banner'
  },
  comments: [
    {
      user: {
        userName: 'Priyanshu Patel',
        userImage: '', // Will fall back to faceless black avatar icon
        alt: '',
        followBtn: true
      },
      commentText: 'Pattern matching was long overdue. Finally simplifying those messy switch statements! 👏',
      timestamp: '2025-07-29T13:10:00',
      likes: 15
    },
    {
      user: {
        userName: 'Elena Torres',
        userImage: 'https://randomuser.me/api/portraits/women/44.jpg',
        alt: '',
        followBtn: false
      },
      commentText: `Pipeline operator is a game changer for RxJS & functional chains. Love how readable my code is now!`,
      timestamp: '2025-07-29T13:15:36',
      likes: 8
    },
    {
      user: {
        userName: 'Clark Smith',
        userImage: 'https://randomuser.me/api/portraits/men/46.jpg',
        alt: '',
        followBtn: true
      },
      commentText: `This is brilliant for onboarding new team members, too—syntax is finally making complex ops approachable.`,
      timestamp: '2025-07-29T13:22:13',
      likes: 11
    }
  ],
  timestamp: '2025-07-29T12:30:00',
  likes: 42,
  tags: ['javascript', 'es2025', 'webdev', 'release'],
  location: 'Bengaluru, India',
  likedBy: [
    {
      userName: 'Nia Williams',
      userImage: 'https://randomuser.me/api/portraits/women/65.jpg',
      alt: '',
      followBtn: false
    },
    {
      userName: 'Amar Singh',
      userImage: 'https://randomuser.me/api/portraits/men/22.jpg',
      alt: '',
      followBtn: true
    },
    {
      userName: 'Li Zhang',
      userImage: 'https://randomuser.me/api/portraits/men/31.jpg',
      alt: '',
      followBtn: false
    }
    // ...add more if needed
  ]
};

export default samplePost;
