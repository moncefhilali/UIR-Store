using Domain.Entities;
using Domain.Interfaces;
using Application.Interfaces;

namespace Application.Services
{
    public class ProductService : IProductService
    {
        private readonly IGenericRepository<Product> _productRepository;

        public ProductService(IGenericRepository<Product> productRepository)
        {
            _productRepository = productRepository;
        }

        public async Task<IEnumerable<Product>> GetProductsAsync()
        {
            return await _productRepository.GetAllAsync();
        }

        public async Task CreateProductAsync(Product product)
        {
            // You can add additional business logic/validation here if needed
            await _productRepository.CreateAsync(product);
        }

        public async Task<Product> GetByIdProductAsync(int id)
        {
            return await _productRepository.GetByIdAsync(id);
        }

        public async Task DeleteProductAsync(int id)
        {
            await _productRepository.DeleteAsync(id);
        }

        public async Task UpdateProductAsync(Product product)
        {
            await _productRepository.UpdateAsync(product);
        }
    }
}
