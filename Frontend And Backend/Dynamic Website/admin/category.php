<?php
include_once "../includes/functions.php";
include_once "../includes/connection.php";
session_start();
if(isset($_SESSION['author_role'])){
	if($_SESSION['author_role']=="admin"){
	?>
<!DOCTYPE html>
<html lang="en">
	<head>
		<title>Admin Panel</title>
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<link rel="stylesheet" href="../style/bootstrap.min.css">
		<link rel="stylesheet" href="../style.css">
		
	</head>
	<body>
	
	 <nav class="navbar navbar-dark sticky-top bg-dark   shadow">
      <a class="navbar-brand col-sm-3 col-md-2 mr-0" href="#">Company name</a>
      
      <ul class="navbar-nav px-3">
        <li class="nav-item text-nowrap">
          <a class="nav-link" href="logout.php">Sign out</a>
        </li>
      </ul>
    </nav>

    <div class="container-fluid">
      <div class="row">
        <?php include_once "nav.inc.php"; ?>

        <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">
          <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1 class="h2">Category</h1>
            <h6>Howdy <?php echo $_SESSION['author_name']; ?> | Your role is <?php echo $_SESSION['author_role']; ?></h6>
          </div>
		
			<div id="admin-index-form">
			<?php
			if(isset($_GET['message'])){
				$msg = $_GET['message'];
				echo '<div class="alert alert-warning alert-dismissible fade show" role="alert">
				'.$msg.'
				  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
					<span aria-hidden="true">&times;</span>
				  </button>
				</div>';
			}
			?>
			
				<h1>ALL CATEGORIES:</h1>
				<button id="addCatBtn" class="btn btn-info">Add New</button>
				<hr>
				<div style="display:none;" id="addCatForm">
					<form action="addcat.php" method="post">
						<input type="text" name="category_name" class="form-control" placeholder="Category Name"><br>
						<button name="submit" class="btn btn-success">Add Category</button>
					</form><br>
				</div>
				
				<table class="table">
				  <thead>
					<tr>
					  <th scope="col">Category Id</th>
					  <th scope="col">Category Name</th>
					</tr>
				  </thead>
				  <tbody>
				  <?php
					$sql = "SELECT * FROM `category` ORDER BY category_id DESC";
					$result = mysqli_query($conn, $sql);
					while($row=mysqli_fetch_assoc($result)){
						$category_id = $row['category_id']; 
						$category_name = $row['category_name']; 
					
			
		?>
			<tr>
					  <th scope="row"><?php echo $category_id;?></th>
					  <td><?php echo $category_name; ?></td>
					  
					 
			</tr>
			
			<?php }?>
				  
				  </tbody>
				</table>
				
			</div>
        
          </div>
        </main>
      </div>
    </div>
	
	<script src="../js/jquery.js"></script>
	<script src="../js/bootstrap.min.js"></script>
	<script src="../js/scroll.js"></script>
	<script>
			$(document).ready(function(){
				$("#addCatBtn").click(function(){
					$("#addCatForm").slideToggle();
				});
			});
	</script>
	</body>
</html>
<?php
}
}
?>
