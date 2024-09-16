<script>
function validateForm() {
  var x = document.forms["myForm"]["mensagem"].value;
  if (x == "" || x == null) {
    alert("Este campo deve ser preenchido");
    return false;
  }
}
</script>