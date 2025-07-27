'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "3901dbf75e25e5aca1c97f8e773a8097",
"assets/assets/images/plaza_slide_0.png": "3b8e642b1d5f697958de59951c2b0127",
"assets/assets/images/atlas_slide_0.png": "8babff7a8229b62df3a63feedf564ac4",
"assets/assets/images/ld_slide_5.png": "28e816145eea09dd619e62a731416eb3",
"assets/assets/images/your-mani-looks-so-good-in-those-jeans_slide_5.jpg": "15807f8b1bdab0f60fd849ba42107d1f",
"assets/assets/images/golden-velvet_slide_2.png": "9a93e5d1119a323e43a9ccde2ff1eb0a",
"assets/assets/images/xoxo_slide_6.png": "a7b70afa6524d072155502dc224e3507",
"assets/assets/images/aced-it_slide_2.png": "a9cfdb78e81df9775ade465e6bd545eb",
"assets/assets/images/wild-orchid_slide_6.png": "04863bba437be96910e60f3a9a164c2b",
"assets/assets/images/ooo-4eva_slide_0.png": "0c8a52473c3c85e39d3633174c69ea99",
"assets/assets/images/ld_slide_1.png": "3d84af3acea7a914dc4cd63a35a96a6e",
"assets/assets/images/lhg_slide_5.png": "099be1fda1f9db8e919311716022a893",
"assets/assets/images/lhg_slide_0.png": "a50441846b5614b6bac59009b4ca9519",
"assets/assets/images/prom_slide_3.png": "38ab9da733cb19299e61661775d51895",
"assets/assets/images/xoxo_slide_0.png": "8684d87f30409ccd77b4369ece156da6",
"assets/assets/images/platinum-velvet_slide_5.jpg": "1ef56d4cd07ab6793878884f050487cf",
"assets/assets/images/cs_slide_5.png": "e954611b485641d433c04d8779f68bac",
"assets/assets/images/pink-goldfish_slide_5.jpg": "1fdda0aa49198ff4a4fd155de32f38a7",
"assets/assets/images/cdj_slide_5.png": "94d9cb37b59082f2e635c4abd0670244",
"assets/assets/images/gh_slide_2.png": "aa9d4b1ff257e6212f758e8802e18218",
"assets/assets/images/peel-off-base-coat_slide_2.png": "977fd7b9401f6cef9b550293a48e0bf3",
"assets/assets/images/obsessed_slide_0.png": "69bfbeed01b13f60f2330eeb5b478f9b",
"assets/assets/images/mulberry_slide_1.png": "eaebb8e7d7f8ab50f70481eee4215d40",
"assets/assets/images/icing-is-the-best-part_slide_5.png": "60c93ca111893a12245d8e20dd66fb82",
"assets/assets/images/amethyst-velvet_slide_2.png": "6775a0f0a3952ea68f60062a1d20aeaf",
"assets/assets/images/kag_slide_1.png": "5bb411b20646b64ac2edf42d596cfc1c",
"assets/assets/images/saltwater-taffy_slide_5.png": "70ae6ad7493a46f1f45d2dad8cdea221",
"assets/assets/images/wild-orchid_slide_3.png": "edf9484ea5462c1793a069eca81eb1b5",
"assets/assets/images/the-queen-takes-her-tea-with-milk_slide_6.png": "1f0019aac2f46495fe7fcc8249cc114d",
"assets/assets/images/lhg_slide_1.png": "8b4ed19031785e17ec419958ce0a776d",
"assets/assets/images/bp_slide_1.png": "5fc711c4964c75051df4bead633078e4",
"assets/assets/images/golden-velvet_slide_0.png": "bb25a107423b7989c7d0e1351b80954c",
"assets/assets/images/lhg_slide_2.png": "1b11c646489d550ff2761cc710cb99d2",
"assets/assets/images/secret-recipe_slide_6.png": "ed825ef7122c1de4572ccfe971c0e975",
"assets/assets/images/cosmic-silver_slide_6.jpg": "b05759a6d5580e6db5378e978bab17a6",
"assets/assets/images/cct_slide_4.jpg": "63454bf3b0010d91f2eb278cd17cb2f7",
"assets/assets/images/wish-you-were-here_slide_3.png": "be6bc970a05d82486cdaf1c8b231e8ce",
"assets/assets/images/golden-velvet_slide_5.jpg": "0301ccc1e8fdb7c521eb3bb458657832",
"assets/assets/images/your-mani-looks-so-good-in-those-jeans_slide_0.png": "1b8b05957281f0a10eca271f0a22d011",
"assets/assets/images/suited_slide_2.png": "4e86cd33220d77e13c7f7dbe03730a7b",
"assets/assets/images/time-to-re-apply_slide_5.png": "efb3186f491039553123ff1f87af3b41",
"assets/assets/images/plaza_slide_3.png": "c1ae3d240dcfe9e2b8ec6b6bfdb05f0a",
"assets/assets/images/jj_slide_1.png": "cfa0b5ea83efc86085f31ddb971e8225",
"assets/assets/images/jj_slide_4.jpg": "d8206442595f80e1d2d09a007061e3a8",
"assets/assets/images/ooo-4eva_slide_5.png": "11d083923809e49d6848cb41ca441da8",
"assets/assets/images/jj_slide_5.png": "56bc32835b3ee9f4090b25017867b04c",
"assets/assets/images/aced-it_slide_1.png": "4104f04bd026400fe0bd0e9831fe8c17",
"assets/assets/images/kag_slide_5.png": "41f7aee477d08796d200dbba27e64890",
"assets/assets/images/saltwater-taffy_slide_2.png": "8a29542713f05066554dd835aef62931",
"assets/assets/images/amethyst-velvet_slide_5.jpg": "2b975630f70a3380dc6d63c0c90d824f",
"assets/assets/images/ooo-4eva_slide_1.png": "c38e9990efd3b193ae6feb4026ca6424",
"assets/assets/images/aced-it_slide_3.png": "b8d13df3324d880fcbb08b1c8f0e6c87",
"assets/assets/images/obsessed_slide_6.jpg": "9bd7adaf2289b5e84437517d8d3dd9cf",
"assets/assets/images/suited_slide_6.png": "cc14446c706968f71c450ee85af6d99b",
"assets/assets/images/xoxo_slide_3.png": "90e546231936d151bdd92cd3e788b9ca",
"assets/assets/images/aqua-velvet_slide_1.png": "ac10655eedf2280b169aa5894e3873ba",
"assets/assets/images/gel-base-coat_slide_1.png": "7d53221e3f96cc6259f6ac49d6ba3830",
"assets/assets/images/the-queen-takes-her-tea-with-milk_slide_2.png": "08a5480e5147d2e1eeb8264a1998cddc",
"assets/assets/images/bp_slide_2.png": "d92b93fcf48f380e98ac01361c9c801c",
"assets/assets/images/gh_slide_0.png": "4b4c5b18ced2756ba572bcbfea1c131d",
"assets/assets/images/jj_slide_3.png": "59cedd4733459a9b5516ac077c7ab771",
"assets/assets/images/pink-goldfish_slide_6.jpg": "04c58e4a5691a23fcd1bca098576636d",
"assets/assets/images/pink-goldfish_slide_4.jpg": "9db33e7ca6dc61225650278af25f66fd",
"assets/assets/images/hd_slide_6.jpg": "9885de6638d397470fca36fdfce74533",
"assets/assets/images/xoxo_slide_1.png": "e48553d57287dd166efc94b0379e51bb",
"assets/assets/images/gel-base-coat_slide_2.png": "79c03a65595a1d7d7c1d0d4eda72afa6",
"assets/assets/images/shacket_slide_6.jpg": "e1a7f8bf60fd94595c477bfcb194446e",
"assets/assets/images/cs_slide_4.jpg": "9766f52dbe630391a359d7a74351105a",
"assets/assets/images/rodeo-queen_slide_1.png": "5d252c24468326f55187baf8643979bb",
"assets/assets/images/kmc_slide_1.png": "039f047cf3e80f840b47677046f65dfa",
"assets/assets/images/time-to-re-apply_slide_3.png": "1b6d0ccff4f4505a13de6285a2026b54",
"assets/assets/images/suited_slide_5.jpg": "a76323d1248728ffd1d4392e84807de7",
"assets/assets/images/petal_slide_6.png": "f4da7e5fa10607f66d41bebb62580b42",
"assets/assets/images/plaza_slide_4.jpg": "58474b87341a6962cab371770a1ae012",
"assets/assets/images/cosmic-silver_slide_2.png": "e3299169877d293a80c5abcd97cc8558",
"assets/assets/images/aced-it_slide_0.png": "fd1eadb923937e2d83aa5afa441823e9",
"assets/assets/images/ld_slide_0.png": "f86af18f2c06291f88c29f4c422c5f2d",
"assets/assets/images/dancing-green_slide_6.jpg": "4710864c643a78954ad898ee1a758709",
"assets/assets/images/fiddlefig_slide_2.png": "36777a745ef0d0bc06222693c0e15f88",
"assets/assets/images/obsessed_slide_5.png": "fedd6570b310f5513ad43cc90980af2e",
"assets/assets/images/aqua-velvet_slide_0.png": "55064a6ab93f5444e64f3de6b0174fef",
"assets/assets/images/icing-is-the-best-part_slide_6.png": "15e67ff4ca1cd8d5aaf1a70d26e4b1c9",
"assets/assets/images/field-day_slide_0.png": "c60096dbf6bad09fa708ad86dd1de958",
"assets/assets/images/rodeo-queen_slide_6.jpg": "597fa94ddf487183e3abdbf2aa7a786d",
"assets/assets/images/wish-you-were-here_slide_0.png": "8b1364d8a43b80c4a517601ff0f93e5c",
"assets/assets/images/your-mani-looks-so-good-in-those-jeans_slide_3.png": "78c9bb1b6d95b736693c54cf9be431e5",
"assets/assets/images/wish-you-were-here_slide_2.png": "e0c2864e0a9716d5cfa57e6ea02938d7",
"assets/assets/images/gel-base-coat_slide_3.png": "c0e74a661b213e77784f007e289a57bb",
"assets/assets/images/bold-unshaken_slide_4.jpg": "780c42c6f2fca154a9103fb44787aa38",
"assets/assets/images/field-day_slide_1.png": "4ec686d77847a3ccf09796472fada0d6",
"assets/assets/images/time-to-re-apply_slide_1.png": "af1a5564301630062821866560bf6779",
"assets/assets/images/bold-unshaken_slide_1.png": "add8cac60396b683a6d2af104017bcb8",
"assets/assets/images/aqua-velvet_slide_2.png": "94f2232068eb341f4fca064ae1bc2929",
"assets/assets/images/hd_slide_3.png": "eac7e33778d5e0a6ad0168fbc24d4910",
"assets/assets/images/permanent-vacation_slide_3.png": "9ff9b811f4988e3a50a068e11de13144",
"assets/assets/images/you-re-invited_slide_6.png": "48e65d23a816b9cf2961f13656049a54",
"assets/assets/images/cv_slide_3.png": "f550256a15bb4d0647e3f5d1012bd4bf",
"assets/assets/images/field-day_slide_2.png": "61646d2dc6c8875299e89bd45ef52f52",
"assets/assets/images/aqua-velvet_slide_6.jpg": "24bdc49f3cc909d3d87db75d8fd13ee6",
"assets/assets/images/gh_slide_6.png": "b4f70603a2ebd408e7aa9bde81769281",
"assets/assets/images/pink-goldfish_slide_2.png": "aa10f994c7382c6b035ec971bba69aa7",
"assets/assets/images/the-queen-takes-her-tea-with-milk_slide_4.png": "5058c7e5511cee4aae777b18ffdc7c34",
"assets/assets/images/cosmic-silver_slide_1.png": "376fc1e0900971bdf80947e274d25870",
"assets/assets/images/e-m_slide_4.jpg": "944f8daf88983f2480b619180478c802",
"assets/assets/images/e-m_slide_3.png": "f9b8f1ca59dc082bf0030b2f77bcec4f",
"assets/assets/images/the-queen-takes-her-tea-with-milk_slide_0.png": "21286f9b864ef56133fb8e64e9e80b7e",
"assets/assets/images/plaza_slide_5.jpg": "cc649510db4355c53edb8cc91159c4e0",
"assets/assets/images/shacket_slide_2.png": "b6f2adfb0001240dd2aa090ed331a897",
"assets/assets/images/platinum-velvet_slide_3.png": "71fc9134e29dd7e1ba500121ecd9f673",
"assets/assets/images/peel-off-base-coat_slide_0.jpg": "967751bf5c436f1538bc8eb4a570ff88",
"assets/assets/images/you-re-invited_slide_3.png": "4fc6a5a4c6865527f9693b93d65cf2ed",
"assets/assets/images/shacket_slide_0.png": "8ed86b15775cfa6229097d12815a050e",
"assets/assets/images/dancing-green_slide_2.png": "2f67b5f35a20fad675fe93dd860201a8",
"assets/assets/images/dancing-green_slide_5.png": "c290db2a04a6458dc222d93eba073eee",
"assets/assets/images/aced-it_slide_4.png": "6b975c0a420d75791f163074436d7c72",
"assets/assets/images/aqua-velvet_slide_3.png": "de3afe3bad56cde9696005b513275ca4",
"assets/assets/images/jj_slide_2.png": "17514ea1e9842f3d2c177178c85d96b5",
"assets/assets/images/pink-goldfish_slide_3.png": "7718654ddea34cd426678adf87ab4c1c",
"assets/assets/images/platinum-velvet_slide_0.png": "86a196d675036b3f93b16922551d6fc3",
"assets/assets/images/aqua-velvet_slide_4.jpg": "777f5493010402d92040dae0b2e00d66",
"assets/assets/images/hz_slide_4.jpg": "8240278d910cae1cf48e7d728fb5ce86",
"assets/assets/images/xoxo_slide_2.png": "c571b1b5153c13278d79d5b92406f5f9",
"assets/assets/images/amethyst-velvet_slide_4.jpg": "53baa6487cac1f616ed21ae8cdffc4b0",
"assets/assets/images/fiddlefig_slide_1.png": "fbf17e5163a16dc2c34b5029396f2b84",
"assets/assets/images/field-day_slide_4.png": "4adfabe22ae144307a482908a61f6067",
"assets/assets/images/aqua-velvet_slide_5.jpg": "770bb50a23197a91e7c5be0ae7c84077",
"assets/assets/images/obsessed_slide_2.png": "3894d4a3325b989cebaa40836eb41203",
"assets/assets/images/mulberry_slide_2.png": "c9727303680a743cac5d970da4107136",
"assets/assets/images/fiddlefig_slide_6.jpg": "7ece15fe3f668ab56c2b6f1d5b5db4c8",
"assets/assets/images/vintage_slide_4.png": "ed972b0d27e5dd91d1ca53b032b53b89",
"assets/assets/images/icing-is-the-best-part_slide_2.png": "c1b7e40207c182f2e85d0da96e46ca16",
"assets/assets/images/bp_slide_3.png": "432338f7d4be5a0dd50375f2d5c4b828",
"assets/assets/images/permanent-vacation_slide_5.png": "6c2124defb688141cfb4def530e1108e",
"assets/assets/images/prom_slide_1.png": "ef6c5189d1b70a219fe1c5becfff99cf",
"assets/assets/images/olive-y-all_slide_2.png": "e4b00ef964ce68fe9cb489c9c7f05e4d",
"assets/assets/images/you-re-invited_slide_5.png": "00f4533df8d4789b4017e9caf9f025c5",
"assets/assets/images/cdj_slide_0.png": "c33b48cad0dc05166d1ceeeac5b5a774",
"assets/assets/images/wild-orchid_slide_1.png": "7442910edadf16d1c7c982b6e389efdd",
"assets/assets/images/olive-y-all_slide_1.png": "42a92727ceb973c5d4d7a40d1d9b0e3b",
"assets/assets/images/ld_slide_2.png": "2d824bf3f94b13b2a2649e11efe43d4c",
"assets/assets/images/suited_slide_4.jpg": "1469ede8c244b6f66d42b3bb20931683",
"assets/assets/images/permanent-vacation_slide_2.png": "ce5dc56394cb57eecd6e477aab8be670",
"assets/assets/images/your-mani-looks-so-good-in-those-jeans_slide_4.jpg": "eb0632a1dfa2608bd09d802b7259d49a",
"assets/assets/images/mulberry_slide_6.jpg": "da40f4f04ef1c254426d8840bd268104",
"assets/assets/images/petal_slide_2.png": "ee6091a607812763cd04c6fd06acc778",
"assets/assets/images/prom_slide_0.png": "6df043c37a641c755527bfd1157cf821",
"assets/assets/images/cct_slide_1.png": "e46932140327243f5d23c41ad6c80847",
"assets/assets/images/kag_slide_4.png": "a9f6d1f0a75c5825e368858cbdc50207",
"assets/assets/images/dancing-green_slide_0.png": "e28c2b57b82b09d36d1d417a6ac0b90c",
"assets/assets/images/e-m_slide_1.png": "2e9e400058601b538a8f6de79f0f0c7e",
"assets/assets/images/e-m_slide_0.png": "d7a30f8f938dcaea1d601dc066d9bf7e",
"assets/assets/images/cdj_slide_6.png": "af567cc94036f70db3fff3740d54692f",
"assets/assets/images/bp_slide_6.jpg": "e75bf816caebd8742ec1902ff146e87a",
"assets/assets/images/vintage_slide_1.png": "a8bc187976b6f9a48aadd15a07ad6ddb",
"assets/assets/images/kmc_slide_0.png": "e18fe835d4b09325f1d88f1ef9d3ef75",
"assets/assets/images/xoxo_slide_4.png": "0226fa3d4b993a93c5af9d47185df124",
"assets/assets/images/hd_slide_1.png": "c89bf701198fb7b90b2b3a32a8dc6a7c",
"assets/assets/images/vintage_slide_2.png": "e5a3335cf90f08b421af8ba0db3199e0",
"assets/assets/images/atlas_slide_1.png": "af51876f9fa7b7eb7f8515b81024ec0a",
"assets/assets/images/hz_slide_6.jpg": "3884ff249895939bb8b87fc5d374372d",
"assets/assets/images/cosmic-silver_slide_0.png": "0e923c1e9d585eff77efe34d98c6eecb",
"assets/assets/images/saltwater-taffy_slide_4.png": "6a038821e92af27509b85ddec98d3b99",
"assets/assets/images/hz_slide_5.jpg": "953a056e98a5a0c7d63c07b1a3589567",
"assets/assets/images/mulberry_slide_3.png": "303076e431818348c5d39f6bad79870b",
"assets/assets/images/the-queen-takes-her-tea-with-milk_slide_3.png": "ab07ddd81734dcc73c00a30079c609eb",
"assets/assets/images/cancel-my-return-flight_slide_4.png": "7598dbe022d2e1f25199c45bb5193b5e",
"assets/assets/images/cosmic-silver_slide_3.png": "e94626737a5c95292d81c0ed9d6f5af8",
"assets/assets/images/icing-is-the-best-part_slide_3.png": "9eccbec805d597d61d933112477aad58",
"assets/assets/images/wish-you-were-here_slide_5.png": "553ba2d6757626dee1f9647b748b8aa8",
"assets/assets/images/fiddlefig_slide_5.jpg": "2af97ddf667d2551af6ceca54b6a17a0",
"assets/assets/images/gh_slide_3.png": "276a3dcb05165c7791b9c5416383d144",
"assets/assets/images/time-to-re-apply_slide_0.png": "97e5d704ab714ff285ff4d1ff51d6b23",
"assets/assets/images/dancing-green_slide_4.png": "5a2709188c7787311b0b13e3f5410a67",
"assets/assets/images/cancel-my-return-flight_slide_3.png": "d7285ac403df495a8090466d8db984e5",
"assets/assets/images/platinum-velvet_slide_2.png": "8662b72e00e6f7a89e756bfc4a3cd76b",
"assets/assets/images/atlas_slide_6.jpg": "22cd7cf856f324b4aa1eecb07d50aa5c",
"assets/assets/images/platinum-velvet_slide_1.png": "11ace7c77993da0e89c2f6cdee9b11e1",
"assets/assets/images/bold-unshaken_slide_3.png": "51053cc67e40f4a237ad8d7fcbd74a52",
"assets/assets/images/hd_slide_4.png": "c8a885e23110a52d772475a091e11816",
"assets/assets/images/prom_slide_2.png": "2487966f873905053f84a68d7ab6294d",
"assets/assets/images/prom_slide_5.jpg": "59f41573026037af14ba84e16c004c3f",
"assets/assets/images/ooo-4eva_slide_4.png": "333e6bf85087d2d42f9a78b959f7a05a",
"assets/assets/images/icing-is-the-best-part_slide_1.png": "9395c1ad0be207c20d5afcfe5c733c18",
"assets/assets/images/saltwater-taffy_slide_6.png": "189d55903470d3b3ffc19d237830ddbd",
"assets/assets/images/kmc_slide_4.jpg": "a608680d7a2ac6dd4270515d95779d62",
"assets/assets/images/secret-recipe_slide_0.png": "18c6d1edd29273454ad274552fb8dd0e",
"assets/assets/images/cv_slide_4.jpg": "a2e6b28287180e3e0b18a5c9b9285eb4",
"assets/assets/images/kag_slide_2.png": "5d0b3a786b3f716849f6e2fd3fdc2467",
"assets/assets/images/your-mani-looks-so-good-in-those-jeans_slide_6.jpg": "a390d761109e98a8082a7909180cf1b3",
"assets/assets/images/petal_slide_4.png": "ba799b9d8d4f9ef00d4baccdb783be72",
"assets/assets/images/olive-y-all_slide_4.jpg": "0b874d5a5c1f7d521158cb50015a2ba8",
"assets/assets/images/kmc_slide_6.png": "809f6ee075fb94581ebfa65195bb08f4",
"assets/assets/images/cancel-my-return-flight_slide_0.png": "b587d14db6add186514ebd1f363b7a44",
"assets/assets/images/cs_slide_2.png": "34dad8a8b0ebcc7dc517c8e851efaefb",
"assets/assets/images/fiddlefig_slide_4.jpg": "3b5b405e7e2f6863b5a0c6116e1072d4",
"assets/assets/images/cv_slide_1.png": "5593287f655987b604d0946f953e86fd",
"assets/assets/images/prom_slide_6.jpg": "42c75b2bbc75bff558d378162edeab3c",
"assets/assets/images/permanent-vacation_slide_6.png": "9d243d54d8d1650048a5203991bf5cbc",
"assets/assets/images/hd_slide_2.png": "6c5944b41b32a8a755f8c94dd7a6c5e0",
"assets/assets/images/platinum-velvet_slide_6.jpg": "8dd49fac085f244f8844f50bc481df0e",
"assets/assets/images/aced-it_slide_5.png": "beb0cc592b503fdeb9e6de0bf2265d7c",
"assets/assets/images/golden-velvet_slide_6.jpg": "07fba669a7cd5349847481353a9139a6",
"assets/assets/images/icing-is-the-best-part_slide_4.png": "de13c4e9a1b5f7593e1afedce3ce6b99",
"assets/assets/images/gh_slide_5.jpg": "35ebdbdd1760d8b4030dc15d5711ea5a",
"assets/assets/images/kmc_slide_3.png": "2739c8c5c1ca638781fd839f68dbb694",
"assets/assets/images/atlas_slide_3.png": "cc1d10030448beba771f18449b77808c",
"assets/assets/images/golden-velvet_slide_3.png": "331d956f4426de2747680d7121a26a43",
"assets/assets/images/golden-velvet_slide_4.jpg": "30b2e331a2362c7dbff932f5845bfe5c",
"assets/assets/images/jj_slide_0.png": "00ee8f8dffae7d2ae41aaca9739dce2a",
"assets/assets/images/lhg_slide_4.png": "a9816c7bc2cec46f1f94e04f23e32989",
"assets/assets/images/field-day_slide_6.png": "88e8502b873683e3636f87f693b79ae3",
"assets/assets/images/rodeo-queen_slide_2.png": "25313e6086b412643f63c0deb60e3ebc",
"assets/assets/images/dancing-green_slide_3.png": "d0917ed7b2a0d1a2adb1beb8f347ab90",
"assets/assets/images/secret-recipe_slide_2.png": "258e4914fb7315d5e1e3569558933095",
"assets/assets/images/atlas_slide_2.png": "39b59fbd003c8ba2567db7c2aeee900a",
"assets/assets/images/e-m_slide_2.png": "4fc0dd9ea516b071f8c8089df4820e5a",
"assets/assets/images/permanent-vacation_slide_1.png": "f9df57362c0445b73d1fd9957e6b7ce1",
"assets/assets/images/suited_slide_0.png": "1d22d978d142dfd1f5764209f6849586",
"assets/assets/images/kag_slide_3.png": "5f363e1283c52add825363bcc3f7d376",
"assets/assets/images/gel-base-coat_slide_0.jpg": "06d0cb45dec07825e91aee2b127cde72",
"assets/assets/images/cct_slide_3.png": "d732271c682b36e17b8e7f4409a4f08a",
"assets/assets/images/time-to-re-apply_slide_6.png": "5edebc4cb3756d75606d19834dac6546",
"assets/assets/images/wild-orchid_slide_4.png": "674e2d6102bb39e3c6980048a5c5afb2",
"assets/assets/images/shacket_slide_4.png": "0f3d5f83c9dcf7ac852a9467706eb1c3",
"assets/assets/images/olive-y-all_slide_6.jpg": "a8f693ac87a2240c63a33aa8d3e17349",
"assets/assets/images/your-mani-looks-so-good-in-those-jeans_slide_1.png": "7fad8814600e99b62300b9366db585eb",
"assets/assets/images/the-queen-takes-her-tea-with-milk_slide_5.jpg": "2c2e8b8a13c95931ce5f74e5c0a4ef8d",
"assets/assets/images/secret-recipe_slide_5.png": "8ffc84cdb7caa27fb9a861ae9f01a5fc",
"assets/assets/images/shacket_slide_5.jpg": "f6e3e7cb980f55c987b9502a4ef1058e",
"assets/assets/images/pink-goldfish_slide_1.png": "78280d334a109f6df13bf7459b813c66",
"assets/assets/images/aced-it_slide_6.png": "59458d193ea5d7d03cda02c866d917e4",
"assets/assets/images/rodeo-queen_slide_0.png": "b75f95cd32ee7c1cb54035ded0f2494b",
"assets/assets/images/ld_slide_6.png": "1de386ef9dc29964741a38e2bd3f7947",
"assets/assets/images/gh_slide_4.png": "b4f70603a2ebd408e7aa9bde81769281",
"assets/assets/images/your-mani-looks-so-good-in-those-jeans_slide_2.png": "f1428307bec39c3ec81864f9a9024744",
"assets/assets/images/olive-y-all_slide_5.jpg": "d266ad04906e244dc8eddb3b429814ed",
"assets/assets/images/permanent-vacation_slide_0.png": "bf433a2a670f8ced12180a1e634bb360",
"assets/assets/images/hd_slide_5.jpg": "563b890fd2b7f112c944ccaf4f7927da",
"assets/assets/images/peel-off-base-coat_slide_3.png": "18357718b8eed4aadb4bf150ed862f67",
"assets/assets/images/kag_slide_6.png": "3fc035435ce71bbd6d1ff44a0f694e46",
"assets/assets/images/petal_slide_1.png": "96bebedfc43ada5360fb6c2a27cb0747",
"assets/assets/images/dancing-green_slide_1.png": "9bebdb577c131cda62791243231dd9a2",
"assets/assets/images/bold-unshaken_slide_0.png": "0becdfbab11bc9de9abcc9aed828aa36",
"assets/assets/images/cancel-my-return-flight_slide_6.png": "1b84803af23099218a5c99377fb4f6b3",
"assets/assets/images/cs_slide_1.png": "8e30e7566909b0cc0b1aa154000a8bf9",
"assets/assets/images/cv_slide_0.png": "2cf3c5adfa6b69e0f7fbfde53b6c4791",
"assets/assets/images/vintage_slide_6.png": "b7e9522ad0edb2742f18b64b6b6da331",
"assets/assets/images/field-day_slide_3.png": "73da20775cda8bf8cd062df768b87f3f",
"assets/assets/images/golden-velvet_slide_1.png": "313f44b3682258a6acc448feddcd6813",
"assets/assets/images/you-re-invited_slide_2.png": "af091f14dd7f83cbba0255fefcef1b62",
"assets/assets/images/the-queen-takes-her-tea-with-milk_slide_1.png": "2053146ea23e4ac650bdfdd1fb249916",
"assets/assets/images/ooo-4eva_slide_3.png": "ace0c77e06d8b75de652de5b9bd9bd93",
"assets/assets/images/cdj_slide_2.png": "6c4192e4460392563355769ac8d0cd9b",
"assets/assets/images/wild-orchid_slide_2.png": "f91edf25637508f8c6b03ce08e748d42",
"assets/assets/images/vintage_slide_3.png": "3ea73dd81497968917d70b128c5e09c5",
"assets/assets/images/lhg_slide_6.png": "959c253bb83d1deba34e14060b37c59d",
"assets/assets/images/time-to-re-apply_slide_4.png": "859d24974d2bdcd15b473cca0047978d",
"assets/assets/images/atlas_slide_5.jpg": "bc53343621416f8b4804e1d3184cd754",
"assets/assets/images/bp_slide_0.png": "aa7e4b07688de132d606158e489e298f",
"assets/assets/images/gh_slide_1.png": "65c66aad0ee6875aba7997e2ad701237",
"assets/assets/images/rodeo-queen_slide_5.jpg": "41613857ccecab0560a3814fd51ddec2",
"assets/assets/images/shacket_slide_1.png": "fc4e74cb0aff1a4d03a2661bcb5eeafe",
"assets/assets/images/you-re-invited_slide_0.png": "6fede11564a0ad3c0256e489cef288f1",
"assets/assets/images/cancel-my-return-flight_slide_5.png": "74ff6fec59d38783bc03dce2700796d9",
"assets/assets/images/lhg_slide_3.png": "884841c0cba079c15c21a91a6b36c3d5",
"assets/assets/images/cdj_slide_1.png": "6e14a773063c2384cbf9ff6944d7d539",
"assets/assets/images/olive-y-all_slide_3.png": "3022258672997e1a6a0325cf5c92510d",
"assets/assets/images/cs_slide_6.jpg": "cb1a575278df1a731ab89cf0fe3fca32",
"assets/assets/images/hz_slide_3.png": "78a5a2687b2d032566c41d054ea78a3f",
"assets/assets/images/cancel-my-return-flight_slide_2.png": "2a4704b50b2c769e48526d5f0531070d",
"assets/assets/images/cdj_slide_4.png": "16f6cf6de9e754a7fe6a01e33841e207",
"assets/assets/images/ooo-4eva_slide_6.png": "39fb0f1599c7aac09e49d3cb4686ad07",
"assets/assets/images/rodeo-queen_slide_4.jpg": "c09fb30a4537f5bf3b638c84d47b80d9",
"assets/assets/images/e-m_slide_5.jpg": "3eeedbe1ac68dd62187f11dbb636841f",
"assets/assets/images/suited_slide_3.png": "c2fd971b022052f8e00664a49ef4ad98",
"assets/assets/images/cs_slide_3.png": "e95ac8d9e7402d118f0f4b9f690e816b",
"assets/assets/images/mulberry_slide_5.jpg": "70dc9f397e2b588a989af32597f7ff70",
"assets/assets/images/bold-unshaken_slide_6.jpg": "48930b3521015017541f3d113f17c58c",
"assets/assets/images/mulberry_slide_0.png": "233562706a0e3d02dac77e5de30405a7",
"assets/assets/images/platinum-velvet_slide_4.jpg": "b367084dc0f14ac4b28daed537a3513c",
"assets/assets/images/bold-unshaken_slide_2.png": "d7e20e339a07a9b7784a6b88269c4238",
"assets/assets/images/prom_slide_4.jpg": "ef939055cdd66f8464798604db92b7a7",
"assets/assets/images/cs_slide_0.png": "8c9aa9ca02ae451f128dedb7081bd284",
"assets/assets/images/icing-is-the-best-part_slide_0.png": "9921ea4b853b42b325d47c7ff6a8af1f",
"assets/assets/images/secret-recipe_slide_4.png": "258e4914fb7315d5e1e3569558933095",
"assets/assets/images/cct_slide_5.png": "482b3254ceec5145ba3f3ece00c3c168",
"assets/assets/images/petal_slide_3.png": "cdbe49ca7077acb67f8f541b56cd15ef",
"assets/assets/images/wild-orchid_slide_5.png": "f50b05ff6beea521cdd582c7c076e0b6",
"assets/assets/images/wish-you-were-here_slide_4.png": "80276d7d7d346c3e1aba3ac03473ced1",
"assets/assets/images/pink-goldfish_slide_0.png": "d565e19047f08fee8155dcc1aad7ebb2",
"assets/assets/images/vintage_slide_0.png": "3c29ee675746fde27eeca309098b25ea",
"assets/assets/images/plaza_slide_1.png": "cdb8759fb8041247b856aed25f85bf63",
"assets/assets/images/saltwater-taffy_slide_3.png": "8ddd02341252a184a5cf612dc7ee1bcb",
"assets/assets/images/obsessed_slide_3.png": "20c9a2650459623535a569d287e00a01",
"assets/assets/images/ooo-4eva_slide_2.png": "f0b4bf6b804232ae9e98a2041a80f8c9",
"assets/assets/images/hd_slide_0.png": "497d68c81df6172c92a996e615525675",
"assets/assets/images/kag_slide_0.png": "7a6e6646539c9c740e7abbb8f6c0da05",
"assets/assets/images/secret-recipe_slide_3.png": "ed825ef7122c1de4572ccfe971c0e975",
"assets/assets/images/vintage_slide_5.png": "8a9df7754d3fcad01b9e935dd556597f",
"assets/assets/images/cct_slide_0.png": "61e63f3895fe51de24c8eb6af77ea2f7",
"assets/assets/images/hz_slide_0.png": "69b73e1c0660e322479ffec7538a17c3",
"assets/assets/images/cosmic-silver_slide_4.jpg": "06b4e8ad95f6c09f8a64b5f81a97cae8",
"assets/assets/images/hz_slide_2.png": "b0401b45aed0a6f099df146c7efad1b5",
"assets/assets/images/amethyst-velvet_slide_1.png": "b01ecc5474ea17ee68eedad0ace7412e",
"assets/assets/images/wish-you-were-here_slide_6.png": "348d38b0e91c67c2fd470b4c03f4eec9",
"assets/assets/images/saltwater-taffy_slide_1.png": "570176253e2d186062fd0b870078e9c0",
"assets/assets/images/wish-you-were-here_slide_1.png": "e9e826ff85e58975999040729edc0e20",
"assets/assets/images/obsessed_slide_1.png": "4fd289d547a024f842e4986371008c25",
"assets/assets/images/e-m_slide_6.jpg": "570cff1c09332b2d1f5b9666c3181ecd",
"assets/assets/images/fiddlefig_slide_3.png": "19f8adda418f1a6b8b3183d489eea4a7",
"assets/assets/images/cv_slide_2.png": "da4eb279116e75444e3a578a808a13cf",
"assets/assets/images/amethyst-velvet_slide_6.jpg": "7f32347571e42956b8f470087179440c",
"assets/assets/images/shacket_slide_3.png": "244064600b46d05f6093b6bd78c0b6a8",
"assets/assets/images/atlas_slide_4.jpg": "ca8af66984cd7db87f54b4ab02ddf71c",
"assets/assets/images/saltwater-taffy_slide_0.png": "26da522f164b4ca34d948a53614ce695",
"assets/assets/images/bp_slide_4.jpg": "689b8920e58fb71f4947a8eab5047e8e",
"assets/assets/images/permanent-vacation_slide_4.png": "c4c1caf1a15d255c8b0a9a6ba3aee1c7",
"assets/assets/images/jj_slide_6.jpg": "17859a449ec0901bd8c2e037a7567aff",
"assets/assets/images/mulberry_slide_4.png": "da8bf7f88ad6e947022bf6fa57d25f27",
"assets/assets/images/amethyst-velvet_slide_0.png": "61e41769d4d3759a7d1694f1b0a35c5a",
"assets/assets/images/bold-unshaken_slide_5.jpg": "d521d9fe258231016d688ee493e76292",
"assets/assets/images/olive-y-all_slide_0.png": "744face33d2382658a0085d4ab3bdec3",
"assets/assets/images/kmc_slide_5.jpg": "884c9191e57ee76e0dbde494d93d5169",
"assets/assets/images/cct_slide_6.jpg": "6c1f113d1077577c1fa90e433a4819ae",
"assets/assets/images/suited_slide_1.png": "20e770a09d8ff6b0e5fab433208ae820",
"assets/assets/images/ld_slide_4.jpg": "4969cfbd7682af868a969f7bf9876855",
"assets/assets/images/bp_slide_5.jpg": "e4d899f69d600d65b8b3ab6571a460a0",
"assets/assets/images/you-re-invited_slide_1.png": "47bdd572360e8a0cde34c21861c096a0",
"assets/assets/images/hz_slide_1.png": "23076b85e5f9eabbae440f31fdfb7baf",
"assets/assets/images/cdj_slide_3.png": "d03dbb12cc211dd5cef2c65cb11726bd",
"assets/assets/images/kmc_slide_2.png": "67fae9f8b99f881adf14591732859682",
"assets/assets/images/field-day_slide_5.png": "e6aaabab845a34094f49f6745aaa59dc",
"assets/assets/images/xoxo_slide_5.png": "ca21299c7eecb34150f5bf5fb6d339e0",
"assets/assets/images/petal_slide_5.png": "3206fdb255dc19c0ce9ffb5c105c6c9a",
"assets/assets/images/ld_slide_3.png": "25155aa884c3e059adfe1413d9652556",
"assets/assets/images/cv_slide_6.png": "78c80224ed4d4022f85393ce81526eb3",
"assets/assets/images/petal_slide_0.png": "4a816bf5bd33ea8b98e53b1d399eab43",
"assets/assets/images/cancel-my-return-flight_slide_1.png": "a90eb3f2e47db531121e28c747f7b892",
"assets/assets/images/time-to-re-apply_slide_2.png": "2aad32f3b15c517d114b7e299654927c",
"assets/assets/images/wild-orchid_slide_0.png": "5dcee0c6a8630c45e584667d4911a22c",
"assets/assets/images/cct_slide_2.png": "8140e2d53ddb332bfb420ffd2d9b701f",
"assets/assets/images/fiddlefig_slide_0.png": "aeaeae93abcff72610114f99a6263f3a",
"assets/assets/images/plaza_slide_6.jpg": "9b04ae8f5325327652b04234c8e01aff",
"assets/assets/images/secret-recipe_slide_1.png": "2e058e4e658cb026da0a16df017b45db",
"assets/assets/images/cosmic-silver_slide_5.png": "851ed087fb814690e5e29d1db0560335",
"assets/assets/images/plaza_slide_2.png": "eac98824b0cddc1677ad77b5540f0143",
"assets/assets/images/obsessed_slide_4.png": "cdb5d8e251d77b60caba078597c88ee3",
"assets/assets/images/cv_slide_5.png": "8562c31dbf57d33ed4d90650b4dffcb3",
"assets/assets/images/peel-off-base-coat_slide_1.png": "a9ee1ef7892b361be9df90d8a7cbc483",
"assets/assets/images/you-re-invited_slide_4.png": "c6ded579ecb471ef64d628c4cbd93ef7",
"assets/assets/images/amethyst-velvet_slide_3.png": "3501216c2777ff0a9c565272ddc64165",
"assets/assets/images/rodeo-queen_slide_3.png": "9893dfce456c3416a02af12ee7dc1746",
"assets/assets/data/gel_polishes.json": "ada4b882f5073045988b83a39feea740",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.json": "36417be7421a4cfb5f7fcbab17a90f11",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/AssetManifest.bin.json": "16747a0ed8402b9fdd63573f95d7068f",
"assets/NOTICES": "151b0bacf84aaf6bbb1b0550962540f9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"version.json": "dc267533e936b6cbe3f860e4815ca304",
"manifest.json": "f5ad4151e1eb02184df12e63b6124f28",
"flutter_bootstrap.js": "9bc03e8c2dd46b4a194553bb93ee390e",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"index.html": "60e9bc6167bc643d947db963c7cd24b2",
"/": "60e9bc6167bc643d947db963c7cd24b2",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"main.dart.js": "8580f8fcacc99e9090545a18c120ca19"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
