angular.module("Eggly", []).controller("MainCtrl", function ($scope) {
  // $scope.hello = 'world test section2';

  $scope.categories = [
    { id: 0, name: "Development" },
    { id: 1, name: "Design" },
    { id: 2, name: "Exercise" },
    { id: 3, name: "Humor" },
  ];

  $scope.bookmarks = [
    {
      id: 0,
      title: "AngularJS",
      url: "http://angularjs.org",
      category: "Development",
    },
    {
      id: 1,
      title: "Egghead.io",
      url: "http://angularjs.org",
      category: "Development",
    },
    {
      id: 2,
      title: "A List Apart",
      url: "http://alistapart.com/",
      category: "Design",
    },
    {
      id: 3,
      title: "One Page Love",
      url: "http://onepagelove.com/",
      category: "Design",
    },
    {
      id: 4,
      title: "MobilityWOD",
      url: "http://www.mobilitywod.com/",
      category: "Exercise",
    },
    {
      id: 5,
      title: "Robb Wolf",
      url: "http://robbwolf.com/",
      category: "Exercise",
    },
    {
      id: 6,
      title: "Senor Gif",
      url: "http://memebase.cheezburger.com/senorgif",
      category: "Humor",
    },
    { id: 7, title: "Wimp", url: "http://wimp.com", category: "Humor" },
    { id: 8, title: "Dump", url: "http://dump.com", category: "Humor" },
  ];

  $scope.currentCategory = null;

  function setCurrentCategory(category) {
    $scope.currentCategory = category;
    cancelCreating();
    cancelEditing();
  }

  function isCurrentCategory(category) {
    return (
      $scope.currentCategory !== null &&
      category.name === $scope.currentCategory.name
    );
  }

  $scope.setCurrentCategory = setCurrentCategory;

  $scope.isCurrentCategory = isCurrentCategory;

    //create and edit state 
  //CRUD

  function resetCreateForm() {
    $scope.newBookmark = { // Reset the newBookmark object
      id: null, // Set ID to null for new bookmarks
      title: "",
      url: "",
      category: $scope.currentCategory.name, 
    };
  }


  function createBookmark(bookmark) {
    bookmark.id = $scope.bookmarks.length; // Assign a new ID based on the current length of the bookmarks array
    $scope.bookmarks.push(bookmark); // Add the new bookmark to the bookmarks array
    resetCreateForm();
  }

  $scope.createBookmark = createBookmark;



  //CREATING AND EDITING STATES

  $scope.isCreating = false;
  $scope.isEditing = false;

  function startCreating() {
    $scope.isCreating = true;
    $scope.isEditing = false;

    resetCreateForm(); // Reset the form when starting to create a new bookmark
  }

  function startEditing() {
    $scope.isCreating = false;
    $scope.isEditing = true;
  }

  function cancelCreating() {
    $scope.isCreating = false;
  }

  function cancelEditing() {
    $scope.isEditing = false;
  }

  function shouldShowCreating() {
    return $scope.currentCategory && !$scope.isEditing;
  }

  function shouldShowEditing() {
    return $scope.isEditing && !$scope.isCreating;
  }

  $scope.startCreating = startCreating;
  $scope.startEditing = startEditing;
  $scope.cancelCreating = cancelCreating;
  $scope.cancelEditing = cancelEditing;
  $scope.shouldShowCreating = shouldShowCreating;
  $scope.shouldShowEditing = shouldShowEditing;





});
