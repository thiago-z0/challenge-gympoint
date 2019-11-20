import jwt from 'jsonwebtoken';

import * as Yup from 'yup';
import { addMonths, parseISO} from'date-fns';
import Customer from '../models/Customer';
import Plan from '../models/Plan';
import Registration from '../models/Registration';

import authConfig from '../../config/auth';

class RegistrationController {
  async store (req, res) {

    const schema = Yup.object().shape({
      plan_id: Yup.number().required(),
      start_date: Yup.date().required(),
    })

    if(!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails'});
    }

    const { plan_id, start_date } = req.body;
    const customer_id = req.params.id;

    const plan = await Plan.findByPk(plan_id);
    if (!plan) {
      return res.status(400).json({ error: 'Plan does not exists' })
    }
    const startDateParsed = parseISO(start_date);
    const endDate = addMonths(startDateParsed, plan.duration);
    const price = plan.duration * plan.price;

    const customerAvaliable = await Customer.findByPk(customer_id);
    if (!customerAvaliable) {
      return res.status(400).json({ error: 'User does not exists' })
    }

    const checkAvailability = await Registration.findOne({where: { customer_id }});
    if (checkAvailability) {
      return res.status(400).json({ error: 'User already has a plan!' })
    }

    const registration = await Registration.create({
      customer_id,
      plan_id,
      start_date: startDateParsed,
      end_date: endDate,
      price,
    });

    return res.json(registration);

  }

  async index (req,res) {

    const index = await Customer.findAll({
      attributes: ['name', 'email', 'age', 'weight', 'height'],
      include: [{
        model: Plan,
        as: 'Plan',
        attributes: ['title', 'duration', 'price'],
        through: { attributes:['start_date', 'end_date', 'price'] },
      }]
    })

    return res.json(index);
  }

  async update (req,res) {

    const schema = Yup.object().shape({
      plan_id: Yup.number().required(),
      start_date: Yup.date().required(),
    })

    if(!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails'});
    }

    const { plan_id, start_date } = req.body;
    const customer_id = req.params.id;

    const registration = await Registration.findOne({ where: { customer_id } })

    if(!registration){
      return res.status(400).json({ error: 'Registration does not exists' })
    }

    const plan = await Plan.findByPk(plan_id);
    if (!plan) {
      return res.status(400).json({ error: 'Plan does not exists' })
    }
    const startDateParsed = parseISO(start_date);
    const endDate = addMonths(startDateParsed, plan.duration);
    const price = plan.duration * plan.price;

    const customerAvaliable = await Customer.findByPk(customer_id);
    if (!customerAvaliable) {
      return res.status(400).json({ error: 'User does not exists' })
    }

    const update = await registration.update({
      customer_id,
      plan_id,
      start_date: startDateParsed,
      end_date: endDate,
      price,
    });

    return res.json(update);

  }
}

export default new RegistrationController();
