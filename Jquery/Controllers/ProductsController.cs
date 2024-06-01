using Jquery.Models;
using Microsoft.AspNetCore.Mvc;

namespace Jquery.Controllers
{
    public class ProductsController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
        public ActionResult GetProducts()
        {
            var products = new List<Products>()
        {
            new Products { Id = 1, Name = "Sản phẩm 1", Price = 100 },
            new Products { Id = 2, Name = "Sản phẩm 2", Price = 1500 },
            new Products { Id = 3, Name = "Sản phẩm 3", Price = 2000 }
        };

            return Json(products);
        }
    }
}
