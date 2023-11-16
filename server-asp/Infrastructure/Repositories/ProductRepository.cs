using Domain.Entities;
using Domain.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure.Repositories
{
    public class ProductRepository : IGenericRepository<Product>
    {
        private readonly EShopDbContext _dbContext;

        public ProductRepository(EShopDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<IEnumerable<Product>> GetAllAsync()
        {
            return await _dbContext.Products.ToListAsync();
        }

        public async Task CreateAsync(Product product)
        {
            _dbContext.Products.Add(product);
            await _dbContext.SaveChangesAsync();
        }

        public async Task<Product> GetByIdAsync(int id)
        {
            return await _dbContext.Products.FindAsync(id);
        }

        public async Task DeleteAsync(int id)
        {
            var entity = await _dbContext.Products.FindAsync(id);
            _dbContext.Products.Remove(entity);
        }

        public async Task UpdateAsync(Product product)
        {
            _dbContext.Entry(product).State = EntityState.Modified;
        }
    }
}
